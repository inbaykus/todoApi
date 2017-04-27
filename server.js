var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var PORT = process.env.PORT || 3000;
var todos = [];
var todoNextId = 1;


app.use(bodyParser.json());

app.get('/', function (req, res) {
	res.send('Todo API Root');
});

// GET /todos
app.get('/todos', function (req, res){
	res.json(todos);
});
// GET /todos/:id()
app.get('/todos/:id', function (req, res){
	var id = parseInt(req.params.id);
	var matchedTodo;
	todos.forEach(function (todo){
		if (id === todo.id) {
			matchedTodo = todo;
		}
	});

	if (matchedTodo) {
		res.json(matchedTodo);
	} else {
		res.status(404).send();
	}
	// res.send('Asking for todo with id of '+ req.params.id);

});

app.post('/todos', function (req, res) {
	var body = req.body;

	body.id = todoNextId;
	todoNextId++;

	todos.push(body);
	// console.log('description ' +body.description);

	res.json(body);
});

app.listen(PORT, function () {
	console.log('Express listening on port '+PORT+ '!');
});

// {
// 	id: 1,
// 	description: 'Meet girls for lunch',
// 	completed: false
// }, {
// 	id: 2,
// 	description: 'Go to market',
// 	completed: false
// }, {
// 	id: 3,
// 	description: 'Makan siang',
// 	completed: true
// }