import router from "express";
import bookRouter from "./book.js";

module.exports = router;

router.Router().use("/book", bookRouter);

export default router;
