const database = require("../database/connection");

//Variable for the table name
const tableName = "checkins";

class CheckInControler {
  getCheckIns(req, res) {
    database
      .select("*")
      .table(tableName)
      .then((checkins) => {
        res.json(checkins);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  getCheckInsByUserID(req, res) {
    const id = req.params.id;

    database
      .select("*")
      .table(tableName)
      .where({ idUser: id })
      .then((checkins) => {
        res.status(200);
        res.json(checkins);
      })
      .catch((err) => {
        res.status(404);
        console.log(err);
      });
  }

  addCheckIn(req, res) {
    const {
      idUser,
      insertDate,
      anxietyLog,
      dayLog,
      exerciseLog,
      healthLog,
      hobbyLog,
      sleepLog,
      sexualLog,
      workLog,
    } = req.body;

    database
      .insert({
        idUser,
        insertDate,
        anxietyLog,
        dayLog,
        exerciseLog,
        healthLog,
        hobbyLog,
        sleepLog,
        sexualLog,
        workLog,
      })
      .table(tableName)
      .then((data) => {
        console.log(data);
        res.status(200);
        res.json({ message: "200 Ok: CheckIn inserted successfully!" });
      })
      .catch((err) => {
        res.status(404);
        console.error(err);
      });
  }

  updateCheckIn(req, res) {
    const id = req.params.id;
  }
  deleteCheckIn(req, res) {
    const id = req.params.id;
  }
}

module.exports = new CheckInControler();
