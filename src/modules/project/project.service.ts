import { prisma } from "../../lib/prisma.js";

const createProject = async (payload: any) => {
  const slug = payload.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)+/g, "");
  return await prisma.project.create({
    data: { ...payload, slug },
  });
};

const getAllProjects = async () => {
  return await prisma.project.findMany({
    include: { category: true },
    orderBy: { createdAt: "desc" }
  });
};

const getProjectById = async (id: string) => {
  return await prisma.project.findUnique({
    where: { id },
    include: { category: true, images: true },
  });
};

const updateProject = async (id: string, payload: any) => {
  if (payload.title) {
    payload.slug = payload.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)+/g, "");
  }
  return await prisma.project.update({
    where: { id },
    data: payload,
  });
};

const deleteProject = async (id: string) => {
  return await prisma.project.delete({
    where: { id },
  });
};

export const ProjectService = {
  createProject,
  getAllProjects,
  getProjectById,
  updateProject,
  deleteProject,
};