const database = require("../database/connection");

//Variable for the table name
const tableName = "users";

class UsersController {
  //Adds a new user to the table
  createUser(req, res) {
    const { username, password } = req.body;

    database
      .insert({ username, password })
      .table(tableName)
      .then((data) => {
        console.log(data);
        res.json({ message: "200 Ok: User inserted successfully!" });
      })
      .catch((err) => {
        res.status(404);
        console.error(err);
      });
  }

  //Retrieves all info from the table
  getUsers(req, res) {
    database
    .select("*")
    .table(tableName)
    .then((users) => {
      res.json(users);
    })
    .catch((err) => {
        res.status(404);
        console.log(err);
    });
  }
}

module.exports = new UsersController();
