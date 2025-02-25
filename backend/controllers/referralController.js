import { body, validationResult } from "express-validator";
import { sendReferralEmail } from "../services/mail.js";
import Referral from "../schema.js";

export const validateReferralForm = [
  body("name").trim().notEmpty().withMessage("Name is required"),
  body("email").isEmail().withMessage("Invalid email format"),
  body("phone").isMobilePhone().withMessage("Invalid phone number"),
];

export const generateReferralCode = async () => {
  let referralCode;
  let isUnique = false;
  while (!isUnique) {
    referralCode = Math.random().toString(36).substring(2, 10).toUpperCase();
    const existingReferral = await Referral.findOne({ referralCode });

    if (!existingReferral) {
      isUnique = true;
    }
  }
  return referralCode;
};

export const submitReferral = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const { name, email, phone } = req.body;
    const referralCode = await generateReferralCode();

    const existingReferral = await Referral.findOne({ email });
    if (existingReferral) {
      return res.status(400).json({ error: "This email has already been referred." });
    }

    const referral = new Referral({ name, email, phone, referralCode });
    await referral.save();

    const subject = "Hey! You got a Referral";
    const text = `Hello ${name}, Let's Start`;

    await sendReferralEmail(email, subject, text, referralCode);

    res.status(201).json({ message: "Referral submitted successfully, email sent", referral });
  } catch (error) {
    console.error("Error submitting referral:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
