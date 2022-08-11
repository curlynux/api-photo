const express = require("express");
const mongoose = require("mongoose");
const stuffRoutes = require("./routes/stuff.js");
const userRoutes = require("./routes/user.js");
const app = express();

app.use("/api/stuff", stuffRoutes);
app.use("/api/auth", userRoutes);

app.use((req, res, next) => 
{
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-requested-With, Content, Accept, Content-Type, Authorization");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, PATCH, OPTIONS");
    next();
});
mongoose.connect("mongodb+srv://spartan:spartan@gofullstackcluster.f4srqjc.mongodb.net/?retryWrites=true&w=majority",
{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("connexion a mongodb reussi !"))
.catch(() => console.log("connexion a mongo echoué !"));

app.use(express.json());

module.exports = app;