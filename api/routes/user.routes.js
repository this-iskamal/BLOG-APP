import express from "express";
import { deleteuser, getUser, getUsers, signoutUser, test, updateUser } from "../controllers/user.controller.js";
import { verifyToken } from "../utils/verifyUser.js";

const router = express.Router();

router.get("/test", test);
router.put("/update/:userID",verifyToken,updateUser)
router.delete("/delete/:userID",verifyToken,deleteuser)
router.post("/signout",signoutUser)
router.get("/getusers",verifyToken,getUsers)
router.get("/:userId",getUser)

export default router;
