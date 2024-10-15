//Importing express 
const express = require("express")

//Creating a variable to call express functions
const app = express()

app.use(express.static("public"))
app.use(express.urlencoded({ extended: true}))
app.use(express.json())

app.set("view engine", "ejs")

//app.get("/", (req, res) => {
    //Sending error status
    //res.status(500).send("Internal Server Error")
    
    //Sending a file to the user do download
    //res.download("server.js")

    //Rendering a file
    //res.render("index", { text: "World"})
//})



const userRouter = require("./routes/users")

//Linking up the routes to users path
app.use("/users", userRouter)

//Running the application
app.listen(3000)
