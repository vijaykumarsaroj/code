const express=require('express');
//cookies set
const cookieParser=require('cookie-parser');
const app=express();

const port=8000;
//connect to mongoose
const db=require('./config/mongoose');
//middleware set
app.set(express.urlencoded());
//cookies used
app.use(cookieParser());
//static file access
app.use(express.static('./assets'));
//layout require
const expressLayouts=require("express-ejs-layouts");
app.use(expressLayouts);
//extract styles and script from subpages into layout
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);

// use express router
app.use('/',require('./routes'));

//setup view engine
app.set('view engine','ejs');
app.set('views','./views');

app.listen(port,function(err){
    if(err){
        console.log(`Error:${err}`);
    }
    console.log(`Server is running on port :${port}`);
});