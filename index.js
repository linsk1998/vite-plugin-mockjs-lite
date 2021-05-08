const Mock = require('mockjs-lite');
const fs = require('fs');
module.exports= function(options={}){
	var dir=options.mockDir || "mock";
	var api=options.apiPath || "/api";
	return {
		name: 'mockjs-lite',
		configureServer(server) {
			var mockPath = api+"/";
			server.middlewares.use((req, resp, next) => {
				// 如果是 /dev-api 打头，则访问地址如下
				if(req.url.startsWith(mockPath)) {
					resp.setHeader('Content-Type', 'application/json');
					var path = req.url.split("?")[0];
					path = dir+"/" + path.substr(mockPath.length) + ".json";
					fs.readFile(path, 'utf-8', function(e, data) {
						if(e) {
							resp.statusCode = 500;
							resp.end(JSON.stringify({
								code: 500,
								msg: e.message
							}));
						} else {
							resp.statusCode = 200;
							resp.end(JSON.stringify(Mock.mock(JSON.parse(data))));
						}
					});
				} else {
					next();
				}
			});
		}
	};
}