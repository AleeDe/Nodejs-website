const express= require("express");
const app=express();
const path= require("path");
const port=5000;

app.use(express.urlencoded());

app.use('/static',express.static('static'));
app.set('view engine', 'pug');
app.set('views',path.join(__dirname,'views'));

app.get("/home", (req, res) => {
    const tit={};
    res.status(200).render('home.pug', tit
    )});
    app.get("/contact", (req, res) => {
        const tit={};
        res.status(200).render('contact.pug', tit
        )});

app.get("/contact", (req, res) => {
    const tit={};
    res.status(200).render('contact.pug', tit
    )});
app.post("/sub", (req, res) => {
    const tit={};
    res.status(200).render('home.pug', tit
    )});
app.get("/about", (req, res) => {
    const tit={};
    res.status(200).render('aboutus.pug', tit
    )});
    app.get("/services", (req, res) => {
        const tit={};
        res.status(200).render('services.pug', tit
        )});

    
    app.listen(port,()=>
    {
        console.log(`The application is Successfully Started on port ${port}`)
    });
