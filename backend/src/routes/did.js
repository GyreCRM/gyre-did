import express from "express";
import DIDService from "../services/didService.js";

const didService = new DIDService();

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const result = await didService.getAlldids();
    return res.status(200).send(result);
  } catch (err) {
    console.log(err);
  }
});

router.post("/", async (req, res) => {
  try {
    const { name, studentId, university, course, eduDate } = req.body;
    const result = await didService.createDid(
      name,
      studentId,
      university,
      course,
      eduDate
    );
    return res.status(201).send(result);
  } catch (err) {
    console.log(err);
  }
});

router.put("/:id/status", async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    const result = await didService.updateDidStatus(id, status);
    return res.status(201).send(result);
  } catch (err) {
    console.log(err);
  }
});

export default router;
