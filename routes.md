# Routes

### Register
/api/auth/register - POST

{ 
	"username": "foo",
	"password": "bar",
	"admin": 0 or 1
}

### Login
/api/auth/login - POST

{
	"username": "foo",
	"password": "bar"
}

### Get all arcades
/api/arcades - GET

### Get list of users
/api/users - GET
