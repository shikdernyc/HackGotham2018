const express        =        require("express");
const bodyParser     =        require("body-parser");
const app            =        express();

app.use(express.static('public'))
const post = 3000;

app.listen(post, function(){
    console.log("Running server on port: " + post)
});

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/',function(req,res){
    res.sendFile(path.join('/public/main.html'));
    //__dirname : It will resolve to your project folder.
});

app.post('/', function (req, res) {
   // Get routes for post requests
});