/* ******************************************
 * This server.js file is the primary file of the 
 * application. It is used to control the project.
 *******************************************/

/* ***********************
 * Require Statements
 *************************/
const express = require("express")
const env = require("dotenv").config()
const path = require("path")
const app = express()

/* ***********************
 * View Engine and Static Files
 *************************/
// Tell Express to use EJS as the view engine
app.set("view engine", "ejs")
// Tell Express where the "views" folder is
app.set("views", path.join(__dirname, "views"))
// Serve static files (CSS, images, JS) from the "public" folder
app.use(express.static(path.join(__dirname, "public")))

/* ***********************
 * Routes
 *************************/
const staticRoutes = require("./routes/static")
app.use(staticRoutes)

// Home route (renders index.ejs)
app.get("/", (req, res) => {
  res.render("index")
})

/* ***********************
 * Local Server Information

 *************************/
const port = process.env.PORT || 5500
const host = process.env.HOST || "localhost"

/* ***********************
 * Log statement to confirm server operation
 *************************/
app.listen(port, () => {
  console.log(`App listening on ${host}:${port}`)
})
