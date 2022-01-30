import express from "express";
import router from "./routes/index.js";
import path from "path";
import { fileURLToPath } from "url";

// set up root directory reference
// find the global url usinf fileURLToPath
// and then turn that into the __dirname (something like...
// /Users/arko/Desktop/Term4Fanshawe/Authoring_4/Week1/
// ArkoMadhurKanak_NGO_TeamPage)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log(__dirname);

//stuff for porting
const app = express();
const port = process.env.PORT || 3000;

//TELLING APP TO USE THE DIRECTORY
app.use(express.static(path.join(__dirname, "public")));

// these are our main routes
//TELL APP TO USE ROUTER FILE
app.use("/", router);

// use this route for anything that doesn't match
app.use(function (req, res) {
  // route doesn't match, probably a 404 or something
  console.log("page does not exist");
});

app.listen(port, () => {
  console.log(`App running at rrr port: ${port}/`);
});
