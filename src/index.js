const express=require("express");
const app=express();
const path=require("path");
const hbs=require("hbs")
const port=process.env.PORT ||8000;
const staticPath=path.join(__dirname,"../public");
console.log(__dirname);
app.use(express.static(staticPath)); // built in middleware
//console.log(path.join(__dirname,"../public"));
const templatePath=path.join(__dirname,"../templates/views");
const partialsPath=path.join(__dirname,"../templates/partials");

console.log(partialsPath)
app.set("views", templatePath)// to set view engine
app.set("view engine","hbs");
hbs.registerPartials(partialsPath);

app.get("/",(req,res)=>{
    res.render("home.hbs",)
 });
app.get("/about",(req,res)=>{
   res.render('about')
});
app.get("/home",(req,res)=>{
    res.render("home.hbs")
 });
 app.get("/weather",(req,res)=>{
    res.render("weather.hbs")
 });
 app.get('*',(req,res)=>{res.render('error')})

 
app.listen(port,()=>{
    console.log("listining to the port")
})