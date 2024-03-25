
# API end points

| Method   | URL                                      | Description                                  |
| -------- | ---------------------------------------- | ---------------------------------------------|
| `POST`   | `/api/auth/signup`                       | Signup new user.                             |
| `POST`   | `/api/auth/login`                        | Login User                                   |
| `GET`    | `/api/notes`                             | Retrieve all notes of logged user.           |
| `GET`    | `/api/notes?search=${search}`            | Retrieve only search notes of logged user.   |
| `POST`   | `/api/notes`                             | Create a new notes for logged user.          |
| `GET`    | `/api/notes/:id`                         | Retrieve post of single note of logged user or if it shared to user. |
| `PATCH`  | `/api/notes/:id`                         | Update (id) notes of logged user.            |
| `DELETE` | `/api/notes/:id`                         | Delete (id) notes of logged user.            |
| `POST`   | `/api/notes/:id/share`                   | Share (id) notes to other .            |



## Teach Use and Library
- Node
- Express
- MongoDB
- JWT
- Bcrypt
- Express Rate Limiter
- Express Slow Down



## For Search i created my own api endpoint using Params   
## For share notes user have to send the email of the user in body (`/api/notes/:id/share`)

(/api/posts/:id) it will only share the data if its share to him or he created the notes
