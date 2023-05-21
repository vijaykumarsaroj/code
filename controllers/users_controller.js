const User=require('../models/user');
module.exports.profile=function(req,res){
    //res.end('<h1>user profile</h1>')
    return res.render('user_profile',{
        title:"users"
    });
}

//render signup pages
module.exports.signUp=function(req,res){
    return res.render('user_sign_up',{
        title:"Codeial| Sign Up"
    })
}
//render signin pages
module.exports.signIn=function(req,res){
    return res.render('user_sign_in',{
        title:"Codeial| Sign In"
    })
}
//users create signup data
module.exports.create=function(req,res){
    console.log(password);
    if(req.body.password != req.body.confirm_password){
        return res.redirect('back');
    }

    User.findOne({email:req.body.email},function(err,user){
        if(err){
            console.log("error in finding user in singnin up");
            return}
            if(!user){
                User.create(req.body,function(err,user){
                    if(err){
                        console.log('error in creating user while signing up');
                        return}
                    return res.redirect('/users/sign-in');
                })
            }else{
                return res.redirect('back');
            }
    });

}

//users create signin and create session of data
module.exports.createSession=function(req,res){
    //steps to authentication
    //find the user
    //handle user found
    //handle password which don't match
    //handle session creation
    //handle user not found 
}