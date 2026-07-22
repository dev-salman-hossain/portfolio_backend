import { prisma } from "../../lib/prisma.js";

const createExperience = async (payload: any) => {
  return await prisma.experience.create({
    data: payload,
  });
};

const getAllExperiences = async () => {
  return await prisma.experience.findMany();
};

const updateExperience = async (id: string, payload: any) => {
  return await prisma.experience.update({
    where: { id },
    data: payload,
  });
};

const deleteExperience = async (id: string) => {
  return await prisma.experience.delete({
    where: { id },
  });
};

export const ExperienceService = {
  createExperience,
  getAllExperiences,
  updateExperience,
  deleteExperience,
};