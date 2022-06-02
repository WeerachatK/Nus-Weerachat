import express from "express";
import { doc, setDoc } from "firebase/firestore";
import{ db } from "../firebase.mjs";
const router = express.Router();

router.post("/create/:ID", async(req, res) => {
    const body = req.body;
    const departmentID = req.params.ID;
    await setDoc(doc(db, "department", departmentID), body);
    return res.send(`Document written with ID: ${departmentID}`);
});
export default router;