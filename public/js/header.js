//复用头部
define(["jquery"],function($){
	function Header(){
		this.load();
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
		}
	}
	
	new Header();
});
