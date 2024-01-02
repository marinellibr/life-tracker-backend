const database = require("../database/connection");

//Variable for the table name
const tableName = "users";

class LoginController {
    postLogin(req, res){
        const { username, password } = req.body;

        database.select("*").table(tableName).where({username: username}).then(userInfo => {
            const correct = userInfo[0].password;
            
            res.status(password === correct ? 200 : 401);
            res.send(password === correct ? {"logged": true, "userId": userInfo[0].id} : {"logged": false, "userId": null});
        }).catch(err => {
            res.send(err);
            console.log(err);
        })
    }
}

module.exports = new LoginController();