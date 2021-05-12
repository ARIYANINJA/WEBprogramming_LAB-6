const express = require('express')
const mysql = require('mysql')
const router = express.Router()
router.get('/', (req, res) => {
  res.render('index')
})
function getConnection(){
  return mysql.createConnection({
    host: "localhost",
    port : "3306",
    user: "root",
    password: "password"
  })
}
router.get('/get_todos', (req, res) => {
  const queryString = "Select * from todos WHERE complete = '0' " 
  conn.query(queryString, (err , rows , fields ) => {
    if (err) {
      console.log("Failed to query @ /get_todo: " + err )
    }
      console.log("Getting data from database @ /get_todos")
      res.json(rows)
  })
})
router.post('/add_todo', (req , res ) => {
  const todo = req.body.add_todo_input
  const queryString = "INSERT INTO todos (todo) VALUES (?)"
  conn.query(queryString, [todo], (err, rows , fields ) =>{
    if(err){
      console.log("failed to insert @ /add_todo: " + todo + " " + err)
    }
    console.log("/@add_todo  : "  + todo + "added. ")
    res.redirect('/ ')
  })
})
router.post('/add_todo', (req, res )  => {
  const  todo_id = req.body.add_todo_input
const queryString = "UPDATE todos  SET complete = '1'  WHERE todo_id = ? "
conn.query(queryString, [todo_id], (err, rows , fields) => {
  if(err){
  console.log("failed to  complete todo @ /complete_todo: " + todo_id  + " " + err)
  }
  console.log("@/complete_todo/ completing todo with id " + todo_id)
  res.redirect('/')
})   
})
module.exports = router
