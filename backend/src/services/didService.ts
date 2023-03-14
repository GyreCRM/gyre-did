import { PrismaClient } from "@prisma/client";
import dayjs from "dayjs";
import sendCertificateToContract from "../utils/sendTransaction";

const prisma = new PrismaClient();

class DIDService {
  async createDid(name, studentId, university, course, eduDate) {
    const result = await prisma.did.create({
      data: {
        name,
        studentId,
        university,
        course,
        eduDate: dayjs(eduDate).toDate(),
        status: "issued",
      },
    });
    return result;
  }

  async getDid(id) {
    try {
      const result = await prisma.did.findUnique({
        where: { id: parseInt(id) },
      });
      return result;
    } catch (err) {
      console.log(err);
    }
  }

  async getAlldids() {
    const result = await prisma.did.findMany({ orderBy: { id: "desc" } });
    return result;
  }

  async updateDidStatus(id, status) {
    try {
      const result = await prisma.did.update({
        where: { id: parseInt(id) },
        data: { status },
      });
      return result;
    } catch (err) {
      console.log(err);
    }
  }

  async sendDidToBlockchain(hash, studentId) {
    await sendCertificateToContract(hash, studentId);
  }
}

export default DIDService;
