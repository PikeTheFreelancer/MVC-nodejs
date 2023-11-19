const db = require('./database');

class Task{
    index(callback){
        var sql='SELECT * FROM posts';
        db.query(sql, callback);
    }
    create(data,callback){
        var sql =`INSERT INTO posts SET 
        title = '${data.title}'`;
        db.query(sql, callback);
    }
    edit(data, callback){
        var sql = `update posts set title = '${data.title}' where id = ${data.id};`;
        db.query(sql, callback);
    }
    delete(data, callback){
        var sql=`DELETE FROM posts WHERE id = '${data.id}'`;
        db.query(sql, callback);
    }
}

module.exports = new Task;