# 职位管理系统

> 基于 Express + MongoDB 的后台职位管理系统

## 业务

1. 用户注册
2. 用户登录
3. 注销
4. 职位添加
5. 职位修改
6. 职位删除
7. 职位查询

## 前后端分离

前端：

	UI
	将前端UI放置到 public 目录下

后端：

	API -- CRUD

	用户注册：
		URL: "/api/register"
		Method：'POST'
		Param：
			username
			password
			email
		Return：JSON
			{
				res_code: 1,
				res_error: "",
				res_body: {
					data: {
						username: "xxx"
					}
				}
			}
	用户登录：
		URL: "/api/login"
		Method：'POST'
		Param：
			username
			password
		Return：JSON
			{
				res_code: 1,
				res_error: "",
				res_body: {
					data: {
						username: "xxx"
					}
				}
			}
	用户注销：
		URL: "/api/logout"
		Method：'POST'
		Param：
		Return：JSON
			{
				res_code: 1,
				res_error: "",
				res_body: {
					status: "success"
				}
			}
