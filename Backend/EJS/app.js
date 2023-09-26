const express = require('express');
const bodyParser = require('body-parser');
const date = require(__dirname + "/date.js");

const app = express();
var items =['Buy food','Cook food','Eat food'];
var work_items =[];

app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get("/", function(req, res){
    // res.write("<h1>Hey! we are gonna make a to do list</h1>");
   

    // var dayNam = today.getDay();
    // if(today.getDate() === 6 || today.getDate() === 7){
    //     // res.write("<h3>Yay! its weekend" );   
    // }
    // else{
    //     // res.write("<h3>Oops! You have to work");
    // }
    // // res.send();
    // switch (dayNam) {
    //     case 0:
    //         dayNam = 'Sunday'
    //         break;
    //     case 1:
    //         dayNam = 'Monday'
    //         break;
    //     case 2:
    //         dayNam = 'Tuesday'
    //         break;
    //     case 3:
    //         dayNam = 'Wednesday'
    //         break;
    //     case 4:
    //         dayNam = 'Thrusday'
    //         break;
    //     case 5:
    //         dayNam = 'Friday'
    //         break;
    //     case 6:
    //         dayNam = 'Saturday'
    //         break;
    //     default:
    //         console.log("There must be some error with the date number!");
    //         break;
    // }
    // res.render('list', {dayName : dayNam})  
    let dateFormat = date();
    res.render('list', {listType : dateFormat, newItems : items});  
})


app.post("/", function(req, res){
    let item = req.body.new_items;
    console.log(req.body);
    if(req.body.list === "Work"){
        work_items.push(item);
        res.redirect("/work");
    }
    else{
        items.push(item);
        // console.log(items);
        res.redirect("/");
    }
})

app.get("/work", function(req, res){
    res.render('list', {listType: 'Work List', newItems: work_items})
})

app.get("/about", function(req, res){
    res.render("about");
})

app.listen(3000, function(){
    console.log("server active at 3000");
})