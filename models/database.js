var mysql = require('mysql');
var db = mysql.createConnection({
   host: 'localhost', 
   user: 'root', 
   password: 'nghia123', 
   database: 'hoc_nodejs', 
   charset : 'utf8mb4_general_ci'
});

db.connect(() => console.log('Da ket noi database !'));

module.exports = db; 