
// Crmeb-foron服务地址
let domain = 'http://127.0.0.1:8081'
// let domain = 'http://43.142.191.46:8080'

module.exports = {
	// 请求域名 格式： https://您的域名
	// #ifdef MP
		HTTP_REQUEST_URL: domain,
	// #endif
	HTTP_ADMIN_URL:'http://127.0.0.1:8080', //PC后台的API请求地址，上传图片用(Crmeb-admin服务地址)
	// #ifdef H5
		//H5接口是浏览器地址
		// HTTP_REQUEST_URL: window.location.protocol+"//"+window.location.host,
		// http://api.java.crmeb.net:20001
		HTTP_REQUEST_URL:domain,
	// #endif
	
	HEADER:{
		'content-type': 'application/json'
	},
	HEADERPARAMS:{
		'content-type': 'application/x-www-form-urlencoded'
	},
	// 回话密钥名称 请勿修改此配置
	TOKENNAME: 'Authori-zation',
	// 缓存时间 0 永久
	EXPIRE:0,
	//分页最多显示条数
	LIMIT: 10
};
