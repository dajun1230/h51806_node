//复用头部
define(["jquery"],function($){
	function Header(){
		this.load();
		this.genCode();
	}
	
	Header.prototype={
		constructor:Header,
		//加载头部
		load:function(){
			//头部
			$.get("/html/include/header.html",$.proxy(this.headerHandler,this));
		},
		//处理头部加载完成后的任务
		headerHandler:function(data){
			//console.log(data);
			$("header").html(data);
			var cc=window.location.href;
//			console.log(cc);
			if (cc=="http://localhost:3000/html/position.html"){
				$(".collapse>ul:first li:eq(0)").removeClass("active");
				$(".collapse>ul:first li:eq(1)").addClass("active");
			}
			//注册事件监听
			this.addListener();
			//获取用户信息
			this.loginUsers();
		},
		addListener(){
			$(".btn-login").on("click",this.loginHandler);
			$(".logout").on("click",this.loginOut);
			$(".code").on("click",this.genCode);
			$(".inputCode").on("blur",this.codeHandler);
		},
		loginHandler(){
			var data=$(".form-login").serialize();
//			console.log(data);
			const url="http://rap2api.taobao.org/app/mock/115326/api/users/login";
			$.post(url,data,(data)=>{
				if (data.res_body.status===1){
					sessionStorage.username=data.res_body.data.username;
					//刷新页面
					location.reload();
				}else{
					$(".login-error").removeClass("hidden");
				}
			},"json");
		},
		//读取username中是否存在用户
		loginUsers(){
			const users=sessionStorage.username;
			if (users){
				$(".login-success").removeClass("hidden").prev("ul").remove();
				$(".login-success a:first").text("欢迎："+users);
			}
		},
		//用户注销
		loginOut(){
			sessionStorage.removeItem("username");
			$.getJSON("http://rap2api.taobao.org/app/mock/115326/api/users/logout",(data)=>{
				if(data.res_body.status===1){
					location.reload();
				}
			});
		},
		//生成验证码
		genCode(){
			$.getJSON("/api/captcha",(data)=>{
				$(".code").html(data.res_body.data);
			});
		},
		// 校验验证码
		codeHandler(event) {
			// 输入的值
			const code = $(event.target).val();
			// ajax
			$.getJSON("/api/captcha/verify", {code}, (data)=>{
				if (data.res_body.valid) {
					alert("正确");
				} else {
					alert("错误");
				}
			})
		}
	}
	
	new Header();
});
