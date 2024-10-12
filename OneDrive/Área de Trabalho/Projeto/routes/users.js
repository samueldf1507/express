//importing express
const express = require("express")

//Creating a router
const router = express.Router()

//"/users" is the path
//Listing out users
//router.get("/users", (req, res) => {
//    res.send("User List")
//})

router.get("/", (req, res) => {
    res.send("User List")
})

//Generating a new user form 
//router.get("/users/new", (req, res) => {
    //res.send("User New Form")
//})

router.get("/new", (req, res) => {
    res.send("User New Form")
})

module.exports = router