import express from "express";
import { validateReferralForm, submitReferral } from "../controllers/referralController.js";

const router = express.Router();

router.post("/submit-referral", validateReferralForm, submitReferral);

export default router;
