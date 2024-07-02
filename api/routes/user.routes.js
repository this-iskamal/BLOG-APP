import express from "express";
import { deleteuser, getUsers, signoutUser, test, updateUser } from "../controllers/user.controller.js";
import { verifyToken } from "../utils/verifyUser.js";

const router = express.Router();

router.get("/test", test);
router.put("/update/:userID",verifyToken,updateUser)
router.delete("/delete/:userID",verifyToken,deleteuser)
router.post("/signout",signoutUser)
router.get("/getusers",verifyToken,getUsers)

export default router;
