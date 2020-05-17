var mysql = require('my-sql');

var connection = mysql.createPool({
    host:'localhost',
    user:'root',
    password:'',
    database:'bd_ecole'
});
module.exports = connection;
