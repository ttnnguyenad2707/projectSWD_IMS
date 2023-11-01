import classService from "../service/class.service.js";
import asyncHandler from "../utils/asyncHandler.js";
const classCtrl = {
  getAllClass: (req, res) => {
    classService.listClass(req, res);
  },
  createClass: asyncHandler((req, res) => {
    classService.createClass(req, res);
  }),
};

export default classCtrl;
