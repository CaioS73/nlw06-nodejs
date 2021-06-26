import { Router } from "express";
import { CreateUserController } from "./controllers/CreateUserController";
import { CreateTagController } from "./controllers/CreateTagController";
import { ensureAdmin } from "./middlewares/ensureAdmin";
import { AuthUserController } from "./controllers/AuthUserController";
import { CreateComplimentController } from "./controllers/CreateComplimentController";
import { ensureAuth } from "./middlewares/ensureAuth";
import { ListUserSentComplimentsController } from "./controllers/ListUserSentComplimentsController";
import { ListUserReceivedComplimentsController } from "./controllers/ListUserReceivedComplimentsController";
import { ListTagController } from "./controllers/ListTagController";
import { ListUserController } from "./controllers/ListUserController";

const router = Router();

const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const authUserController = new AuthUserController();
const createComplimentController = new CreateComplimentController();
const listUserReceivedComplimentsController = new ListUserReceivedComplimentsController();
const listUserSentComplimentsService = new ListUserSentComplimentsController();
const listTagController = new ListTagController();
const listUserController = new ListUserController();

router.post("/users", createUserController.handle);
router.post("/tags", ensureAuth,ensureAdmin, createTagController.handle);
router.post("/login", authUserController.handle);
router.post("/compliments", ensureAuth, createComplimentController.handle);

router.get("/users/compliments/sent", ensureAuth, listUserSentComplimentsService.handle);
router.get("/users/compliments/received", ensureAuth, listUserReceivedComplimentsController.handle);
router.get("/tags", ensureAuth, listTagController.handle);
router.get("/users", ensureAuth,listUserController.handle);

export {router}