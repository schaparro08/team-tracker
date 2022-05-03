const mysql = require('mysql2');


const connection = mysql.createConnection(
    {
      host: 'localhost',
      // MySQL username,
      user: 'root',
      // TODO: Add MySQL password here
      password: 'rootroot',
      database: 'employees'
});

// Set up error handeling in case connection is messed up 
connection.connect(function (err) {
    if (err) throw err;
});

module.exports = connection;