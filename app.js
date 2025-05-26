import express from "express";
import { userRouter } from "./Routes/userRoute.js";
import { hostRouter } from "./Routes/hostROute.js";

const app = express();
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use("/", userRouter);
app.use("/host", hostRouter);
const PORT = 1000;
app.listen(PORT, () => console.log(`Server started at ${PORT}`));
