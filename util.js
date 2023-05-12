function ifLogin(req, res, next) {
    if(req.session.id){
        return res.redirect('/userhome')
    }
    next();
}
function isLogin(req, res, next) {
    if(!req.session.uid){
        return res.redirect('/login')
    }
    next();
}


module.exports={ifLogin,isLogin}