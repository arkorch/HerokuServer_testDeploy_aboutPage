import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
  res.send("hello from expresstree!");
});

router.get("/trevor", (req, res) => {
  res.send(`this is trevor's favi get page`);
  console.log("hit my route");
});

router.get("/joe", (req, res) => {
  res.send(`this is joe's main page`);
  console.log("hit route for mr ce joe joe");
});

router.get("/john", (req, res) => {
  res.send(`this is john's 3D work page`);
});

// export the router and make it available to app.js
export default router;
