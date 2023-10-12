import express from "express";
const app = express();
import bodyParser from "body-parser";
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
import data from "./db.json" assert  { type: "json" };

app.get("/", (req, res) => {
  res.render("index.ejs", {
    content: data.users,
  });
});
app.post("/create", (req, res) => {
  console.log(req.body);
});
app.listen(3000, () => {
  console.log("server is running on port 3000");
});
