# Documentations
In PouriaGame server we have a classic API.

## Review
| API             | Route            | Method | Parameters                                                              | Auth Token? | Response                   | Description                                                     |
|-----------------|------------------|--------|-------------------------------------------------------------------------|-------------|----------------------------|-----------------------------------------------------------------|
| Registeration   | `/register`      | POST   | `username` required, `password` required, `record` required and numeric | No          | JSON, Registered userdata  | Send username, password and record to register in the server    |
| Login           | `/login`         | POST   | `username` required, `password` required                                | No          | JSON, auth token           | Send username and password and get a token (expires in 30 days) |
| Get All Records | `/record`        | GET    |  _                                                                      | No          | JSON, list of users        | Send a request and get users sorted by records                  |
| Update Record   | `/record/update` | POST   | `record` required                                                       | Yes         | Plaintext, `OK` or nothing | Send new record and auth token to update record                 |

## Examples
There are some examples for API

### Registeration
cURL:
```sh
curl -X POST http://api.example.com/register \
    -H 'Content-Type: application/json' \
    -d '{
        "username": "MohammadAli",
        "password": "pass123",
        "record": 56
    }'
```

JavaScript (fetch):
```js
const url = "http://api.example.com/register"

const bodyData = {
    username: "MohammadAli",
    password: "pass123",
    record: 56
}

const headers = {
    "Content-Type": "application/json"
}

fetch(url, {
    method: "POST",
    body: JSON.stringify(bodyData),
    headers
})
.then(res => {
    // handle response  
})
```

### Login
cURL:
```sh
curl -X POST http://api.example.com/login \
    -H 'Content-Type: application/json' \
    -d '{
        "username": "MohammadAli",
        "password": "pass123"
    }'
```

JavaScript (fetch):
```js
const url = "http://api.example.com/login"

const bodyData = {
    username: "MohammadAli",
    password: "pass123"
}

const headers = {
    "Content-Type": "application/json"
}

fetch(url, {
    method: "POST",
    body: JSON.stringify(bodyData),
    headers
})
.then(res => {
    // handle response  
})
```

### Get All Records
cURL:
```sh
curl -X GET http://api.example.com/record \
    -H 'Content-Type: application/json'
```

JavaScript (fetch):
```js
const url = "http://api.example.com/record"

const headers = {
    "Content-Type": "application/json"
}

fetch(url, {
    method: "GET",
    headers
})
.then(res => {
    // handle response  
})
```

### Update Record
cURL:
```sh
curl -X POST http://api.example.com/record/update \
    -H 'Authorization: Bearer YOUR_TOKEN' \
    -H 'Content-Type: application/json' \
    -d '{
        "record": 61
    }'
```

JavaScript (fetch):
```js
const url = "http://api.example.com/record/update"

const token = "YOUR_TOKEN"

const bodyData = {
    record: 61
}

const headers = {
    "Authorization": `Bearer ${token}`
    "Content-Type": "application/json"
}

fetch(url, {
    method: "POST",
    body: JSON.stringify(bodyData),
    headers
})
.then(res => {
    // handle response  
})
```