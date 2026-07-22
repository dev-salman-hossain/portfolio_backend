import { prisma } from "../../lib/prisma.js";

const createSkill = async (payload: any) => {
  return await prisma.skill.create({
    data: payload,
  });
};

const getAllSkills = async () => {
  return await prisma.skill.findMany({
    orderBy: { level: "desc" }
  });
};

const updateSkill = async (id: string, payload: any) => {
  return await prisma.skill.update({
    where: { id },
    data: payload,
  });
};

const deleteSkill = async (id: string) => {
  return await prisma.skill.delete({
    where: { id },
  });
};

export const SkillService = {
  createSkill,
  getAllSkills,
  updateSkill,
  deleteSkill,
};