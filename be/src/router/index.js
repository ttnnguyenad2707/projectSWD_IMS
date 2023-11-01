import express from "express";
import router from "./book.js";
import accountRouter from "./account.js";
const indexRouter = express.Router();

indexRouter.use("/book", router);
indexRouter.use("/account", accountRouter);
indexRouter.use("/account", accountRouter);

module.exports = router;

export default indexRouter;
