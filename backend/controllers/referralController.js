import { body, validationResult } from "express-validator";
import { sendReferralEmail } from "../services/mail.js";
import Referral from "../schema.js";

export const validateReferralForm = [
  body("name").trim().notEmpty().withMessage("Name is required"),
  body("email").isEmail().withMessage("Invalid email format"),
  body("phone").isMobilePhone().withMessage("Invalid phone number"),
];

export const generateReferralCode = () => {
  return Math.random().toString(36).substring(2, 10).toUpperCase();
};

export const submitReferral = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const { name, email, phone } = req.body;
    const existingReferral = await Referral.findOne({ email });
    if (existingReferral) {
      return res.status(400).json({ error: "This email has already been referred." });
    }
    const referralCode = generateReferralCode();
    const referral = new Referral({ name, email, phone, referralCode });
    await referral.save();
    const subject = "Hey! You got a Referral";
    const text = `Hello ${name}, Let's Start`;
    await sendReferralEmail(email, subject, text, referralCode);
    res.status(201).json({ message: "Referral submitted successfully. Email sent!", referral });
  } catch (error) {
    console.error("Error submitting referral:", error);
    res.status(500).json({ error: "Internal Server Error. Please try again later." });
  }
};
