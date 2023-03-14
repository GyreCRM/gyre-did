import express from "express";
import DIDService from "../services/didService";

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

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await didService.getDid(id);
    if (!result) {
      return res.status(404).send({ message: "Did not found" });
    }
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
    const did = await didService.getDid(id);
    if (!did) {
      return res.status(404).send({ message: "Did not found" });
    }
    if (did.status === "published") {
      return res.status(400).send({ message: "Did is already published" });
    }
    const hash = "12341234";
    await didService.sendDidToBlockchain(hash, did.studentId);
    const result = await didService.updateDidStatus(id, status);
    return res.status(201).send(result);
  } catch (err) {
    console.log(err);
  }
});

export default router;
