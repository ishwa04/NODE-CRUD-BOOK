const express = require("express");
const port = 2004;
const app = express();

const db = require ("./config/db");
const adminSchema = require("./model/firstschema");

app.set("view engine","ejs");
app.use(express.urlencoded({extended:true}));


app.get("/",async (req,res) => {
    let data = await adminSchema.find({});
    res.render("index",{data});
});

app.post("/addData",async (req,res) => {
    let data = await adminSchema.create(req.body);
    data && res.redirect("/")
});

app.get("/deleteData",async (req,res) => {
    let data = await adminSchema.findByIdAndDelete(req.query.id);
    data && res.redirect("/");
});

app.get("/editData",async (req,res) => {
    let singleData = await adminSchema.findById(req.query.id);
    singleData && res.render("edit",{singleData});
});

app.post("/updateData",async (req,res) => {
    let update = await adminSchema.findByIdAndUpdate(req.body.id,req.body);
    update && res.redirect("/");
});
app.listen (port,(err) =>{
    err ?  console.log(err) : console.log(`server start on port ${port}`);
});




