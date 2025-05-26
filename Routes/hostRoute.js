import express from "express";

const hostRouter = express.Router();

hostRouter.get("/add-home", (req, res) => {
  res.render("add-home", { currentPath: "/host/add-home" });
});
const registeredHomes = [];
hostRouter.post("/add-home", (req, res) => {
  console.log(req.body);
  registeredHomes.push(req.body);
  res.render("success");
});

export { hostRouter, registeredHomes };
