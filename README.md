# Link Deploy API

    https://crabby-sweater-worm.cyclic.app/

# Rest API

The REST API to the example web is described below.

## Endpoint users

### Request GET ALL

`GET /users/all`

### Response GET ALL

    {
        "data": [
            {
                "_id": "655077aa47170c5a28d49275",
                "name": "fajar",
                "username": "fajar10",
                "password": "$2b$10$YCvB4phbDuQh2SvguViHcu5gQVIp05ilRjMPNt9NcPW.oQXZ28a/O",
                "__v": 0
            },
            {
                "_id": "6550784447170c5a28d49277",
                "name": "riski",
                "username": "riski123",
                "password": "$2b$10$OINPhn5MHXhyheUPCpu6vu4tdyzU5HWp1PPouMzOhpXawtYBMD.Rm",
                "__v": 0
            }
        ],
        "message": "Get All Data"
    }

### Request GET BY ID

`GET /users/:id`

### Response GET BY ID

    {
        "data": {
            "_id": "655077aa47170c5a28d49275",
            "name": "fajar",
            "username": "fajar10",
            "password": "$2b$10$YCvB4phbDuQh2SvguViHcu5gQVIp05ilRjMPNt9NcPW.oQXZ28a/O",
            "__v": 0
        },
        "message": "Get User By Id"
    }

### Request POST Register

`POST /users`

    {
        "name": "tsalit",
        "username": "tsalit123",
        "password": "123"
    }

### Response POST Register

    {
        "data": {
            "name": "tsalit",
            "username": "tsalit123",
            "password": "$2b$10$oJxkJdB40P8060XZQCv3t.8pc7JenVXBRML8eM5CUWKLxKEW4OmpW",
            "_id": "6550dfc202730589fc46f4bc",
            "__v": 0
        },
        "message": "User Created Successfully"
    }

### Request PUT

`PUT /users/:username`

    {
        "name": "riski hidayat",
        "username": "riski123",
        "password": "1234",
        "newPassword": "123"
    }

### Response PUT

    {
        "data": {
            "_id": "6550784447170c5a28d49277",
            "name": "riski hidayat",
            "username": "riski123",
            "password": "$2b$10$Tjk1e5TQkkL72fT3gnD8..os/JmQXeZ2PZVZ7geoUdoC4CbEVO3Aa",
            "__v": 0
        },
        "message": "User Updated Successfully"
    }

### Request POST LOGIN

`DELETE /users/login`

    {
        "username": "fajar10",
        "password": "123"
    }

### Response POST LOGIN

    {
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImZhamFyMTAiLCJpYXQiOjE2OTk3OTkzMTR9.EPLcPfKm_3Wy25Z9jOH5hiJiWKTJvy3M7G2Gnf-RbnQ",
        "message": "Login Successfully"
    }

## Endpoint Todos

### Request GET ALL

`GET /todos/:username`

    {
      'Authorization': `Bearer ${token}`
    }

### Response GET ALL

    {
        "data": [
            {
                "_id": "6550e22e02730589fc46f4c8",
                "value": "main voli",
                "status": false,
                "username": "fajar10",
                "__v": 0
            },
            {
                "_id": "6550e23e02730589fc46f4cb",
                "value": "ngoding project",
                "status": false,
                "username": "fajar10",
                "__v": 0
            },
            {
                "_id": "6550e24502730589fc46f4ce",
                "value": "healing",
                "status": false,
                "username": "fajar10",
                "__v": 0
            }
        ],
        "message": "Get Todos By Username"
    }

### Request DETAIL TODO

`GET /todos/detail/:id`

    {
      'Authorization': `Bearer ${token}`
    }

### Response DETAIL USERNAME

    {
        "data": {
            "_id": "6550e22e02730589fc46f4c8",
            "value": "main voli",
            "status": false,
            "username": "fajar10",
            "__v": 0
        },
        "message": "Detail Todo"
    }

### Request POST

`POST /todos`

    {
        "value": "kegiatan sosial",
        "username": "tsalit123"
    }

### Response POST

    {
        "data": {
            "value": "kegiatan sosial",
            "status": false,
            "username": "tsalit123",
            "_id": "6550e51602730589fc46f4d8",
            "__v": 0
        },
        "message": "Todo Created Successfully"
    }

### Request PUT VALUE

`PUT /todos/:id`

    {
        "value": "webinar skilvul"
    }

### Response PUT VALUE

    {
        "data": {
            "_id": "6550e22e02730589fc46f4c8",
            "value": "webinar skilvul",
            "status": false,
            "username": "fajar10",
            "__v": 0
        },
        "message": "Todo Updated Successfully"
    }

### Request PUT STATUS

`PUT /todos/status/:id`

    {
        "status": true
    }

### Response PUT STATUS

    {
        "data": {
            "_id": "6550e22e02730589fc46f4c8",
            "value": "webinar skilvul",
            "status": true,
            "username": "fajar10",
            "__v": 0
        },
        "message": "Status Updated Successfully"
    }

### Request DELETE

`DELETE /todos/:id`

### Response DELETE

    {
        "data": {
            "deleted": 1
        },
        "message": "Todo Deleted Successfully"
    }

### Request DELETE ALL TODO

`DELETE /todos/all/:username`

### Response DELETE ALL TODO

    {
        "data": {
            "deleted": 1
        },
        "message": "Delete All Todo Successfully"
    }
