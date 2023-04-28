module.exports.profile= function(req,res){
    return res.render('user_profile', {
        title: 'User Profile'
    })
}

module.exports.signIn= function(req,res){
    return res.render('sign-in', {
        title: 'SignIn'
    })
}

module.exports.signUp= function(req,res){
    return res.render('sign-up', {
        title: 'SignUp'
    })
}

// get the sign up data
module.exports.create = function(req, res){
    // TODO later
}


// sign in and create a session for the user
module.exports.createSession = function(req, res){
    // TODO later
}