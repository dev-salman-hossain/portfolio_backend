import { Router } from "express";
import validateRequest from "../../middleware/validateRequest.js";
import isAuthenticated from "../../middleware/authenticate.js";
import { createContactValidationSchema } from "./contact.validation.js";
import { ContactController } from "./contact.controller.js";

const router = Router();

router.post("/", validateRequest(createContactValidationSchema), ContactController.saveMessage);
router.get("/", isAuthenticated, ContactController.getMessages);
router.delete("/:id", isAuthenticated, ContactController.deleteMessage);

export const ContactRoutes: Router = router;