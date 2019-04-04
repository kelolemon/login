# 基于 node.js express & jade 的登陆注册页面

## 介绍

+ 路由
   - /login 或 / 用户登陆界面
   - /register 用户注册界面
   - /login/api/login 登陆 post请求
   - /login/api/register 注册 post请求

+ 用户信息
   - username 用户名
   - password 密码
   - re_password 密码check
   - telephone 手机号
   - mail 邮箱
   
+ 数据库
    - 基于mongoose
    
+ 目录介绍

   - bin/www 以及 app 为基本的 express部署
   - model.js 为数据库的初始化
   - routes / login.js 进行登陆操作
   - routes / register.js 进行注册操作
   - /public jade所需要的加载数据
   - /views jade页面
       * error.jade 错误信息
       * home.jade 登陆成功后的页面
       * register.jade 注册页面
       * index.jade 登陆页面
       * failure.jade 登陆/注册错误信息页面
       
       
