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
  console.log(req.query.name)
    res.send("User List")
})

//Generating a new user form 
//router.get("/users/new", (req, res) => {
    //res.send("User New Form")
//})


router.get("/new", (req, res) => {
    res.render("users/new")
})

//Creating a new user
router.post("/",  (req, res) => {
    const isValid = false
    if(isValid) {
      users.push({ firstName: req.body.firstName })
      res.redirect(`users/${users.length - 1}`)
    } else {
      console.log("error")
      res.render("users/new", {firstName: req.body.firstName})
    }
})

//id = dynamic parameter
router.use(logger)

router
  .route("/:id")
  .get((req, res) => {
    console.log(req.user)
    res.send(`Get user with ID ${req.params.id}`)
   })
  .post((req, res) => {
    res.send(`Update user with ID ${req.params.id}`)
   })
  .delete((req, res) => {
    res.send(`Delete user with ID ${req.params.id}`)
  })

const users = [{ name: "Kyle"}, {name :  "John"}]

router.param("id", (req, res, next, id) => {
    req.user = users[id]
    next()
})

function logger(req, res, next) {
    console.log(req.originalUrl)
    next()
}


module.exports = router