const connection = require("../database/connection");
const express = require("express");
const router = express.Router();
const UsersController = require("../controllers/UsersController");
const CheckInController = require("../controllers/CheckInController");
const LoginController = require("../controllers/LoginController");

const usersRoute = "/users";
const checkInRoute = "/checkins";
const logInRoute = "/login";

//Routes access for the controllers
router.post(`${usersRoute}`, UsersController.createUser);
router.get(`${usersRoute}`, UsersController.getUsers);

//Routes for checkins
router.get(`${checkInRoute}`, CheckInController.getCheckIns);
router.get(`${checkInRoute}/:id`, CheckInController.getCheckInsByUserID);
router.post(`${checkInRoute}`, CheckInController.addCheckIn);
router.put(`${checkInRoute}/:id`, CheckInController.updateCheckIn);
router.delete(`${checkInRoute}/id`, CheckInController.deleteCheckIn);

//Routes for login
router.post(`${logInRoute}`, LoginController.postLogin);


module.exports = router;
