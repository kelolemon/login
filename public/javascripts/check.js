/* Created by Microsoft on 2016/7/30.*/
$(document).ready(function () {
    function validateForm(){
        if(checkUserName()&&checkPassword()&&checkRepassword()){
            alert("恭喜您！注册成功！");
        }
    }
});

//验证用户名（为3~16个字符，且不能包含”@”和”#”字符）
function checkUserName(){
    var name=document.getElementById("username").value.trim();
    var nameRegex=/^[^@#]{3,16}$/;
    if(!nameRegex.test(name)){
        document.getElementById("nameInfo").innerHTML="用户名为3~16个字符，且不能包含”@”和”#”字符";
    }else{
        document.getElementById("nameInfo").innerHTML="";
        return true;
    }

}
//验证密码（长度在8个字符到16个字符）
function checkPassword(){
    var password=document.getElementById("password").value.trim();
    //var password=$("#password").value;
    $("#passwordInfo").innerHTML="";
    //密码长度在8个字符到16个字符，由字母、数字和".""-""_""@""#""$"组成
    //var passwordRegex=/^[0-9A-Za-z.\-\_\@\#\$]{8,16}$/;
    //密码长度在8个字符到16个字符，由字母、数字和"_"组成
    var passwordRegex=/^[0-9A-Za-z_]\w{7,15}$/;
    if(!passwordRegex.test(password)){
        document.getElementById("passwordInfo").innerHTML="密码长度必须在8个字符到16个字符之间";
    }else{
        document.getElementById("passwordInfo").innerHTML="";
    }
}

//验证校验密码（和上面密码必须一致）
function checkRepassword(){
    var repassword=document.getElementById("repassword").value.trim();
    var password=document.getElementById("password").value.trim();
    //校验密码和上面密码必须一致
    if(repassword!==password){
        document.getElementById("repasswordInfo").innerHTML="两次输入的密码不一致";
    }else if(repassword==password){
        document.getElementById("repasswordInfo").innerHTML="";
    }
}

function checktel(){
    var tel=document.getElementById("tel").value.trim();
    //检查手机
    var checkValue = /^[1](([3][0-9])|([4][5-9])|([5][0-3,5-9])|([6][5,6])|([7][0-8])|([8][0-9])|([9][1,8,9]))[0-9]{8}$/;
    if(!checkValue.test(tel)){
        document.getElementById("telephoneInfo").innerHTML="请输入正确的手机号码";
    }else{
        document.getElementById("telephoneInfo").innerHTML="";
    }
}

function checkmail(){
    var mail=document.getElementById("mail").value.trim();
    //校验密码和上面密码必须一致
    var checkValue = /^[\w.\-]+@(?:[a-z0-9]+(?:-[a-z0-9]+)*\.)+[a-z]{2,3}$/;
    if(!checkValue.test(mail)){
        document.getElementById("mailInfo").innerHTML="请输入正确的邮箱";
    }else{
        document.getElementById("mailInfo").innerHTML="";
    }
}