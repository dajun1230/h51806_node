const {User}=require("../model/model.js");

const UserDao={
	save(userinfo){
		const user=new User(userinfo);
		return user.save();
	},
	find(condition){
		
	}
}

module.exports=UserDao;