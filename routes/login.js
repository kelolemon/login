var express = require('express');
var crypto = require('crypto');
var router = express.Router();
var bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({ extended: false });
var UserInfo = require('../model');
/**/
function check_password_hash(password, recheck) {
    var md5 = crypto.createHash('md5');
    return password === md5.update(recheck).digest('hex');
}

router.get('/', (req, res) => {
    res.render('index', {title: 'Login'});
});

router.get('/home', (req, res) =>{
    res.render('home', {title: 'Home'});
});

router.post('/api/login',urlencodedParser ,(req, res) => {
    var username = req.body.username;
    var password = req.body.password;
    if(!username){
        res.render('failure',{title:'username can not be empty'});
        return;
    }
    console.log(req.body);
    UserInfo.findOne({'username':username},(err,user)=>{
        if(err)
            console.log(err);
        if (!user){
            res.render('failure',{title:'password or username is not correct'});
            return;
        }else
            UserInfo.findOne({'username':username},(err,userinfo)=>{
                if (err)
                    console.log(err);
                if(check_password_hash(user.password,password) && !err){
                    //res.send(200,'OK');
                    res.render('home',{title: userinfo});
                    return;
                }else{
                    res.render('failure',{title:'password or username is not correct'});
                    return;
                }
            });

    });
    //res.redirect('/home');
});

module.exports = router;
