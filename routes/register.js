var express = require('express');
var crypto = require('crypto');
var router = express.Router();
var bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({ extended: false });
var UserInfo = require('../model');

function gen_password_hash(password) {
    var md5 = crypto.createHash('md5');
    return md5.update(password).digest('hex');
}

/* GET home page. */
router.get('/' ,(req, res) => {
    res.render('register', {title: 'Register'});
});

router.post('/api/register',urlencodedParser , (req, res) => {
    if(req.body)
        console.log(req.body);
    var username = req.body.username;
    var password = req.body.password;
    var check_pass = req.body.re_password;
    var telephone = req.body.telephone;
    UserInfo.findOne({'username':username},(err,user)=>{
        if(err)
            console.log(err);
        if (user){
            res.render('failure',{title:'username has existed'});
            return;
        }
    });
    if (!username){
        res.render('failure',{title:'username can not be empty'});
        return;
    }
    if (password!==check_pass){
        res.render('failure',{title:'two passwords are not compared'});
        return;
    }
    var mail = req.body.mail;
    var user_info = new UserInfo({
        username: username,
        password: gen_password_hash(password),
        telephone: telephone,
        mail: mail
    });

    user_info.save((err) => {
        if (err) {
            console.log(err);
            res.render('failure',{title:'System error'});
            return;
        }
        res.render('index',{title: 'login'});
        return;
    });
});

module.exports = router;