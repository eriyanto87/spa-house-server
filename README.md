# Spa House

live link: https://spa-house.evi.vercel.app/

### Summary

Appointment scheduling software or meeting scheduling tools that also showcase professionals on their work.

### Technology

React, CSS, Node, Express, and PostgreSQL

### API DOCUMENTATION

BASE URL: https://aqueous-springs-84550.herokuapp.com/

GET /api/treatments
Provides array of all treatments objects.

Example request/response:

```
  GET https://aqueous-springs-84550.herokuapp.com/api/treatments

  HTTP STATUS 200 OK
  [
{
"id": 1,
"name": "massage-60",
"length": 60,
"price": 99,
"display_name": "60 minute massage"
},
{
"id": 2,
"name": "massage-90",
"length": 90,
"price": 139,
"display_name": "90 minute massage"
}
  ]
```

GET /api/confirmation

Provides array of all treatments objects.

Example request/response:

GET https://aqueous-springs-84550.herokuapp.com/api/confirmation

HTTP STATUS 200 OK

```
[
    {
"id": 7,
"user_id": 61,
"treatment_id": 1,
"comment": null,
"order_date": "2020-11-15T06:09:43.423Z",
"appointment_date": "2020-12-02T06:14:00.000Z"
},
{
"id": 8,
"user_id": 65,
"treatment_id": 1,
"comment": null,
"order_date": "2020-11-15T06:17:35.360Z",
"appointment_date": "2020-11-30T06:21:00.000Z"
}
]
```

POST /api/users

Creates a new user. Requires a request body.

Key Value
user_name string, required Must not be blank
user_number string, required Must not be blank

example request/response:

```
 POST https://aqueous-springs-84550.herokuapp.com/api/users
  REQ BODY: {
      "user_name": "nes",
      "user_number: "1234567"
      }

  HTTP STATUS 201 Created
  Location: https://aqueous-springs-84550.herokuapp.com/api/users/8sdfbvbs65sd
  {
    "id": "8sdfbvbs65sd",
    "user_name": "nes",
    "user_number: "1234567",
    "user_email": null,
    "user_street": null,
    "user_city": null,
    "user_state": null,
    "user_zip": null
  }
```

POST /api/confirmation

Creates a new item. Requires a request body.
Key Value
user_id integer, required Must not be blank
treatment_id integer, required Must not be blank
comment string, optional
order_date TIMESTAMPTZ default now(), required
appointment_date TIMESTAMPTZ required,

Example request/response:

```
 POST https://aqueous-springs-84550.herokuapp.com/api/confirmation
  REQ BODY: {
    [
    {
      user_id: 1,
      treatment_id: 1,
      comment: "hello",
      appointment_date: 2020-11-19T21:53:00.000Z,
    },
  ];
      }

  HTTP STATUS 201 Created
  Location: https://aqueous-springs-84550.herokuapp.com/api/confirmation/8sdfbvbs65sd
  [
    {
      id: 1,
      user_id: 1,
      treatment_id: 1,
      comment: "hello",
      order_date: 2020-11-18T10:55:03.000Z,
      appointment_date: 2020-11-19T21:53:00.000Z,
    },
  ];
```
