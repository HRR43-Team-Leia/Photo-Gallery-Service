var mysql = require('mysql');

var connection = mysql.createConnection( {
  host: 'localhost',
  user: 'root',
  password: ''
});

connection.connect(function(error) {
  if (error) {
    throw error
  } else {
    console.log('==mySQL is connected==')
  }
});

