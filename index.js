import express from "express";
const app = express();
import bodyParser from "body-parser";
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.get("/", (req, res) => {
  res.render("index.ejs");
});
app.listen(3000, () => {
  console.log("server is running on port 3000");
});
