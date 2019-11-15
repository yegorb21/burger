var mysql = require('mysql');
var connection = mysql.createConnection({
  port: 3306,
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'burgerDB'
});

connection.connect(function (err) {
  if (err) {
    console.error('Couldnt connect with msg: ' + err);
    return;
  }
  console.log('Successful connection with id: ' + connection.threadId);
});

module.exports = connection;