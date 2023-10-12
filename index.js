import express from "express";
import bodyParser from "body-parser";
// import data from "./db.json" assert { type: "json" };
import fs from "fs";
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
let dbData = [];
fs.readFile("./db.json", "utf-8", (err, jsonString) => {
  if (err) console.log(err);
  else dbData = JSON.parse(jsonString);
});
app.get("/", (req, res) => {
  res.render("index.ejs", {
    // content: data.users,
    content: dbData,
  });
});
app.get("/addNew", (req, res) => {
  res.render("NewUser.ejs");
});
app.post("/create", (req, res) => {
  let newData = { ...req.body, id: dbData.length + 1 };
  dbData.push(newData);
  fs.writeFile("./db.json", JSON.stringify(dbData, null, 2), (err) => {
    // Error checking
    if (err) throw err;
    console.log("New data added");
    res.render("success.ejs", { message: "User Added successfully!" });
  });
});
app.get("/delete/:id", (req, res) => {
  let filteredIndex = dbData.findIndex((obj) => obj.id == req.params.id);
  dbData.splice(filteredIndex, 1);
  fs.writeFile("./db.json", JSON.stringify(dbData, null, 2), (err) => {
    // Error checking
    if (err) throw err;
    console.log("New data added");
    res.render("success.ejs", { message: "User Deleted successfully!" });
  });
});
app.get("/edit/:id", (req, res) => {
  let filteredObj = dbData.find((obj) => obj.id == req.params.id);
  res.render("updateUser.ejs", { editing: true, content: filteredObj });
  // dbData.splice(filteredIndex, 1);
  // fs.writeFile("./db.json", JSON.stringify(dbData, null, 2), (err) => {
  //   // Error checking
  //   if (err) throw err;
  //   console.log("New data added");
  //   res.render("success.ejs", { message: "Details edited successfully!" });
  // });
});
app.listen(3000, () => {
  console.log("server is running on port 3000");
});
