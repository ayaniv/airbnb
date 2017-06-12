const express = require('express')
const app = express()

var router = express.Router();
var path = __dirname + '/app/';

app.use(express.static('static'));

router.use(function (req,res,next) {
    console.log("/" + req.method);
    next();
});

router.get("/",function(req,res){
    res.sendFile(path + "index.html");
});

app.use("/",router);


app.listen(3000,function(){
    console.log("Live at Port 3000");
});







