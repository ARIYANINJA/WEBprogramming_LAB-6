get_todos()
function get_todos(){
  var request = new XMLHttpRequest();
  var requestURL  = '/get_todos'
  request.open('GET', requestURL)
  request.responseType = 'json'
  request.sent();
  request.onload = function(){
    var todos = request.response
    printTodos(todos)
  }
}
function printTodos(todos){
  var table = document.getElementsById('todo ')
  for(var i in todos){
    const todo_id = todos[i].todo_id
    const todo = todos[i].todo
    var row = document.createElement("tr")
    var todo_cell = document.createElement("td")
    var todo_button = document.createElement("Button")
    todo.button.setAttribute("onclick", "completeTodo(" + todo_id + ")")
    todo_button.innerHTML = todo
    todo_cell.append(todo_button)
    row.append(todo_cell)
    table.append(row)

  }

}
function completeTodo(todo_id){
var form = document.getElementsById("complete_todo_form")
 form.action = form.action + todo_id
 form.submit()
}
