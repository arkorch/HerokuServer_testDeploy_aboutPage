import express from "express";
import router from "./routes/index.js";

const app = express();
const port = process.env.PORT || 3000;

// these are our main routes
app.use("/", router);

// use this route for anything that doesn't match
app.use(function (req, res) {
  // route doesn't match, probably a 404 or something
  console.log("page does not exist");
});

app.listen(port, () => {
  console.log(`App running at rrr port: ${port}/`);
});
