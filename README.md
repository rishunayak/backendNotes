| Method   | URL                                      | Description                                  |
| -------- | ---------------------------------------- | ---------------------------------------------|
| `POST`   | `/api/auth/signup`                       | Signup new user.                             |
| `POST`   | `/api/auth/login`                        | Login User                                   |
| `GET`    | `/api/notes`                             | Retrieve all notes of logged user.           |
| `GET`    | `/api/notes?search=${search}`            | Retrieve only search notes of logged user.   |
| `POST`   | `/api/notes`                             | Create a new notes for logged user.          |
| `GET`    | `/api/posts/:id`                         | Retrieve post of single note of logged user. |
| `PATCH`  | `/api/posts/:id`                         | Update (id) notes of logged user.            |
| `DELETE` | `/api/posts/:id`                         | Delete (id) notes of logged user.            |
