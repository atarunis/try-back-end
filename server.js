// const express = require('express');
// var bodyParser = require('body-parser');


// const app = express();
// const port = process.env.PORT || 5000;

// app.get('/api', (req, res) => {
//   res.send({ express: 'Hello From Express' });
// });

// app.listen(port, () => console.log(`Listening on port ${port}`));


var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose')
const port = process.env.PORT || 5000;


var Test = require('./models/info')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

mongoose.connect('mongodb://localhost/int_testing',function(err){
    if(err) throw err;

    console.log("successfully connected");
})

var msg = new Test ({
    messages: 'HiiiWorld'
})

msg.save(function(err){
    if(err) throw err;
    console.log("Saved!")
})

app.get('/messages',(req,res)=>{

    Test.find({},(err,test)=>{
        // console.log(test);
        
        res.json(test)
    })
})

app.listen(port, () => console.log(`Listening on port ${port}`));
