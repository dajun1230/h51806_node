const UserDao=require("../../dao/user/user_dao.js");

const UserService={
	login(req,res,next){
		//GET获取数据
//		const {username,password}=req.query;
		//POST获取数据
		//const {username,password}=req.body;
		
	},
	register(req,res,next){
		const {username,password,email}=req.query;
		UserDao.save({username,password,email})
				.then((data)=>{
					console.log(data);
					res.json({res_code:1,res_error:"",res_body:{status:1,message:"success",data:{username:data[0].username}}});
				})
				.catch((err)=>{
					console.log(data);
					res.json({res_code:1,res_error:"",res_body:{status:0,message:"failed:"+err,data}});
				});
	},
	check(req,res,next){
		
	},
	logout(req,res,next){
		
	}
}

module.exports=UserService;