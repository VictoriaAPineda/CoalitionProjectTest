// const express = require('express')
// const cors = require('cors')
// const app = express();

// app.use(cors())

// let username= 'coalition';
// let password = 'skills-test';
// let auth = btoa(`${username}:${password}`)

// fetch('https://fedskillstest.coalitiontechnologies.workers.dev',{
//     method: 'GET',
//     headers:{
//         'Authorization' : `Basic ${auth}`, 
//     },
//     'Content-Type' : 'application.json'
// }).then(function (response) {
// 	if (response.ok) {
// 		return response.json();
// 	}
// 	throw response;
// }).then(function (data) {
// 	console.log(data);
// }).catch(function (error) {
// 	console.warn(error);
// });