//Importing express
const express = require("express")

const app = express()

app.set("view engine", "ejs")

app.get("/", (req, res) => {
    //Sending data

    //Sending a file to the user do download
    //res.download("server.js")

    console.log("Here")

    //Rendering a file
    res.render("index", { text: "World"})
})

const userRouter = require("./routes/users")

//Linking up the routes to users path
app.use("/users", userRouter)

app.listen(3000)
