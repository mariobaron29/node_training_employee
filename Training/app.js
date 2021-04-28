const express = require('express')
const app = express()
const port = 3001

app.use(express.json())


//GET get all employees
app.get('/employees', (req, res) => {
 const axios = require('axios');
 axios.get('http://localhost:3000/employees/')
 .then(response => {
 	console.log(response.data);
 	res.json(response.data)
 })
 .catch(error => {
 	console.log(error);
 	res.status(500).send(error);
 });
})

//GET get employee by id
app.get('/employees/:id', (req, res) => {
 const axios = require('axios');
 const  id  = req.params.id;

 axios.get('http://localhost:3000/employees/'+id)
 .then(response => {
 	
 	console.log("id: "+id);
 	//const employeeIndex = employees.findIndex(emp => emp.id == id);

 	console.log(response.data);
 	res.json(response.data)
 })
 .catch(error => {
 	console.log(error);
 	res.status(500).send(error);
 });
})

//POST add a new employee 
app.post('/employees', (req, res) => {
 let body = req.body; 
 const axios = require('axios');

 axios.post('http://localhost:3000/employees/', body)
 .then(response => {
 	console.log(response.data);
 	res.json(response.data)
 })
 .catch(error => {
 	console.log(error);
 	res.status(500).send(error);
 });
})

//PATCH patch employee by id
app.patch('/employees/:id', (req, res) => {
 const axios = require('axios');
 let body = req.body; 
 const id = req.params.id;

 axios.patch('http://localhost:3000/employees/'+id, {name: body.name, salary: body.salary, position: body.position})
 .then(response => {
 	
 	console.log("id: "+id);
 	console.log("body: "+body);

 	console.log(response.data);
 	res.json(response.data)
 })
 .catch(error => {
 	console.log(error);
 	res.status(500).send(error);
 });
})

//DELETE delete a certain employee
app.delete('/employees/:id', (req, res) => {
 const axios = require('axios');
 const  id  = req.params.id;

 axios.delete('http://localhost:3000/employees/'+id)
 .then(response => {
 	
 	console.log("id: "+id);
 	//const employeeIndex = employees.findIndex(emp => emp.id == id);

 	console.log(response.data);
 	res.json(response.data)
 })
 .catch(error => {
 	console.log(error);
 	res.status(500).send(error);
 });
})

app.get('/', (req, res) => {
res.send('Hello World!')
})

app.listen(port, () => {
console.log(`Example app listening at http://localhost:${port}`)
})