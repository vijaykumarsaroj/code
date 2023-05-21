module.exports.home=function(req,res){
    //return res.end('<h1>server access in routes file</h1>')
    console.log(req.cookies);//cookies get from browser
    res.cookie('user_id',32);//cookies sent to browser
    return res.render('home',{
        title:"Home"
    });
}
//modulle.export.newContact=function(){}