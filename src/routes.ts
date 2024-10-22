import { Router } from "express";
import UserController from "./user/user.controller";
import ChecklistController from "./checklist/checklist.controller";

const router = Router();

const userController = new UserController();

const checklistController = new ChecklistController();

router.get("/_health_check", (_, res) => res.sendStatus(200));
router.post("/login", (req, res, next) => userController.login(req, res, next));
router.post("/create", (req, res, next) => userController.create(req, res, next));
router.post('/checklists', (req, res) => checklistController.create(req, res));
router.get('/checklists/:email', (req, res) => checklistController.getChecklists(req, res));

export { router };