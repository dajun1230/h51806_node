var express = require('express');
var router = express.Router();
const UserService=require("../services/user/user_service.js");

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get("/login",UserService.login);

router.get("/register",UserService.register);

router.get("/logout",UserService.logout);

module.exports = router;
