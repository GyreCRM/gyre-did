import { PrismaClient } from "@prisma/client";
import dayjs from "dayjs";

const prisma = new PrismaClient();

class DIDService {
  async createDid(name, studentId, university, course, eduDate, status) {
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

  async getAlldids() {
    const result = await prisma.did.findMany({ orderBy: { id: "desc" } });
    return result;
  }
}

export default DIDService;
