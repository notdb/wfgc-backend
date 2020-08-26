# Routes

### POST - /api/auth/register - Register a new user

Requires a username, password, and 0 or 1 value indicating admin status.

Example:

```
{ 
	"username": "foo",
	"password": "bar",
	"admin": 0 or 1
}

```

### POST - /api/auth/login - Login

Requires a username and password

Example:

```
{
	"username": "foo",
	"password": "bar"
}

```

### GET - /api/arcades - Get all arcades

Example:

```
/api/arcades/

```


### PUT - /api/arcades/:id - Update Arcade By ID

Update Arcade by ID. Restricted. Must be logged in to access route.

Example:

```
/api/arcades/1

{
	"arcadename": "foo"
}

```

### DELETE - /api/arcades/:id - Delete Arcade By ID

Delete Arcade by ID. Restricted. Must be logged in to delete arcade.

Example:

```
/api/arcades/1

```


### GET - /api/users/ - Get list of users

Restricted route. Must be admin to access.

Example:

```
/api/users/

```
