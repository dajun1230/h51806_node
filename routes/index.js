var express = require('express');
var router = express.Router();
const Captcha=require("../services/common/captcha.js");
//svg验证码
var svgCaptcha = require('svg-captcha');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//生成验证码
router.get("/api/captcha",Captcha.genCaptcha);
//验证验证码
router.get("/api/captcha/verify",Captcha.verifyCaptcha);

module.exports = router;
