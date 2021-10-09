# vite-plugin-mockjs-lite

A mock plugin for vite

```javascript
import mock from 'vite-plugin-mockjs-lite';

mock({
	mockDir: "mock",
	apiPath: "/api",
	delay:[300,1000]
})
```

Example: getUserInfo.json

```json
{
	"error": 0,
	"data": {
		"userid": "@id()",
		"username": "@cname()",
		"birthdate": "@date()",
		"avatar": "@image('200x200','red','#fff','avatar')",
		"description": "@paragraph()",
		"ip": "@ip()",
		"email": "@email()"
	}
}
```

See http://mockjs-lite.js.org/ 