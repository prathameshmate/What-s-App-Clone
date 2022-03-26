import express from "express";
import { addUser, getUsers } from "../controller/user_Controller.js";
import { newConversation , getConversation } from "../controller/conversation_Controller.js";
import { newMessage , getMessages } from "../controller/message_Controller.js"


const router = new express.Router();

router.post("/add", addUser);
router.get("/users", getUsers)

router.post("/conversation/add", newConversation)
router.post("/conversation/get", getConversation)

router.post("/message/add" , newMessage);
router.get("/message/get/:id" , getMessages)

export default router;