import express from "express";
import bodyParser from "body-parser";
// import data from "./db.json" assert { type: "json" };
import fs from "fs";
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
let dbData;
fs.readFile("./db.json", "utf-8", (err, jsonString) => {
  if (err) console.log(err);
  else dbData = JSON.parse(jsonString);
  //   console.log("jsonString", JSON.parse(jsonString).users);
});
app.get("/", (req, res) => {
  res.render("index.ejs", {
    // content: data.users,
    content: dbData,
  });
  // res.render("NewUser.ejs")
});
app.get("/addNew", (req, res) => {
  res.render("NewUser.ejs");
});
app.post("/create", (req, res) => {
  let newData = { ...req.body, id: dbData.length + 1 };
  dbData.push(newData);
  //   console.log("dbData",dbData);
  fs.writeFile("./db.json", JSON.stringify(dbData,null, 2), (err) => {
    // Error checking
    if (err) throw err;
    console.log("New data added");
    res.render("success.ejs", { message: "User Added successfully!" });
  });
});
app.listen(3000, () => {
  console.log("server is running on port 3000");
});
