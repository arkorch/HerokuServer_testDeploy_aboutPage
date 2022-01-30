import express from "express";
const router = express.Router();

import path from "path";
import { fileURLToPath } from "url";

// set up root directory reference
// find the global url usinf fileURLToPath
// and then turn that into the __dirname (something like users/desktop/NGO_Redux)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//this is the index.html part
router.get("/", (req, res) => {
  //res.send("hello from expresstree!");
  res.sendFile(path.join(__dirname, "../views/index.html"));
});

//MY PAGE ROUTED HERE
router.get("/arko", (req, res) => {
  res.sendFile(path.join(__dirname, "../views/arko.html"));
  console.log("hit my route");
});

//MADHUR'S PAGE ROUTED HERE
router.get("/madhur", (req, res) => {
  res.sendFile(path.join(__dirname, "../views/madhur.html"));
  console.log("hit route for mr ce joe joe");
});

//KANAK'S PAGE ROUTED HERE
router.get("/kanak", (req, res) => {
  res.sendFile(path.join(__dirname, "../views/kanak.html"));
});

// FOR ERRORS
//this catches broken routes - requests for resources that dont exist
router.use((req, res) => {
  console.log("page does not exist");
  res.sendFile(path.join(__dirname, "../views/404.html"));
});

// export the router and make it available to app.js
export default router;
