var express = require('express');
var router = express.Router();

/* GET users listing. */
//注册
router.get('/reg', function(req, res, next) {
  res.render('user/reg')
});

//不是完整路径  而是/user后面的路径
//用户登录
router.get('/login', function(req, res, next) {
  res.render('user/login')
});
//退出
router.get('/logout', function(req, res, next) {
  res.send('退出');
});
module.exports = router;
