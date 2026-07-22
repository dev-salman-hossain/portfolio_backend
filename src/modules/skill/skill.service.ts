import { prisma } from "../../lib/prisma.js";

const createSkill = async (payload: any) => {
  return await prisma.skills.create({
    data: payload,
  });
};

const getAllSkills = async () => {
  return await prisma.skills.findMany({
    orderBy: { proficiency: "desc" }
  });
};

const updateSkill = async (id: string, payload: any) => {
  return await prisma.skills.update({
    where: { id },
    data: payload,
  });
};

const deleteSkill = async (id: string) => {
  return await prisma.skills.delete({
    where: { id },
  });
};

export const SkillService = {
  createSkill,
  getAllSkills,
  updateSkill,
  deleteSkill,
};