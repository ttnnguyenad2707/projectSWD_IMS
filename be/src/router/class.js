import classCtrl from "../controller/classController.js";
import express from "express";

const classRouter = express.Router();
classRouter.post("/", classCtrl.createClass);
classRouter.get("/list", classCtrl.getAllClass);

export default classRouter;
