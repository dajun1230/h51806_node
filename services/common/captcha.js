// svg验证码
var svgCaptcha = require('svg-captcha');

const Captcha={
	genCaptcha(req,res,next){
		var captcha = svgCaptcha.create({color:true});// {data: '<svg.../svg>', text: 'abcd'}
	    req.session.captcha = captcha.text;
	    //将验证码<svg>标签返回浏览器
	    res.status(200).json({
	    	res_code:1,
	    	res_error:"",
	    	res_body:{
	    		data:captcha.data
	    	}
	    });
	},
	verifyCaptcha(req,res,next){
		//获取请求中传递到服务器的验证码字符串
		const {code}=req.query;
		//比较验证码是否输入正确
		var valid;
		if(code.toUpperCase()===req.session.captcha.toUpperCase()){
			valid=true;
		}else{
			valid=false;
		}
		
		res.json({
			res_code:1,
			res_error:"",
			res_body:{
				valid//对象简写的方式
			}
		});
	}
};

module.exports=Captcha;
