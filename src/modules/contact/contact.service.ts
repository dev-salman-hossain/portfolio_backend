import { prisma } from "../../lib/prisma.js";

const saveMessage = async (payload: any) => {
  return await prisma.contactMessage.create({
    data: payload,
  });
};

const getMessages = async () => {
  return await prisma.contactMessage.findMany({
    orderBy: { createdAt: "desc" },
  });
};

const deleteMessage = async (id: string) => {
  return await prisma.contactMessage.delete({
    where: { id },
  });
};

export const ContactService = {
  saveMessage,
  getMessages,
  deleteMessage,
};