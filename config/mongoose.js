//require the library
const mongoose=require('mongoose');

//connect to the database
//mongoose.connect('mongodb://127.0.0.1:27017/codeil_development');
mongoose.connect('mongodb://127.0.0.1/codeial_development');

//acquire the connection (to check if it is successfull)

const db=mongoose.connection;
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
//error
db.on('error',console.error.bind(console,'error connecting to db'));
/*
 db.on('error',function(err){
    console.log(err.message);
 });
*/
//up and running the print the message

db.once('open',function(){
    console.log('Successfully connected to database: MongoDB');
});

module.exports=db;