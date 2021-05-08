# vite-plugin-mockjs-lite

A mock plugin for vite

```javascript
import mock from 'vite-plugin-mockjs-lite';

mock({
	dir: "mock",
	apiPath: "/api"
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