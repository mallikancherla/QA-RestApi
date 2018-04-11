'use strict';
var express=require('express');
var app=express();
var jsonParser=require('body-parser').json;

app.use(jsonParser());

app.use( (req,res,next)=>{
    req.body;
    next();
    });

app.use( (req,res,next)=>{
console.log('first middleware');
next();
});
var port=process.env.PORT || 3000;
app.listen(port,()=>{ 
    console.log('express server running on port: 3000\nlocalhost:3000');
});