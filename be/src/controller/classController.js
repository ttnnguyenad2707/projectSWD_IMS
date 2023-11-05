import classService from "../service/classService.js";
import asyncHandler from "./asyncHandler.js"
const classCtrl = {
  getAllClass: (req, res) => {
    classService.listClass(req, res);
  },
  createClass: asyncHandler((req, res) => {
    classService.createClass(req, res);
  }),
};

export default classCtrl;
