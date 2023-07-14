const port = 8000;
const express = require("express");
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
    res.send("<h1>Welcome to my calculator</h1>");
});

app.get("/basic", function(req, res){
    res.sendFile(__dirname + "/addition.html");
});

app.post("/basic", function(req, res){
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);

    var result = num1 + num2;
    res.send(`${num1} + ${num2} = ${result}`);
});

app.get("/bmicalc", function(req, res){
    res.sendFile(__dirname + "/bmi.html");
});

app.post("/bmicalc", function(req, res){
    // console.log(req.body);
    var height = Number(req.body.height);
    var weight = Number(req.body.weight);

    // console.log(`${height} and ${weight}`);
    var bmi = weight / ((height/100) * (height/100));
    res.send(`Your BMI is ${Math.round(bmi)}`);
})

app.listen(port, function(){
    console.log(`Server listening to port ${port}`);
});