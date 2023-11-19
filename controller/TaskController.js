var db=require('../models/database');

class TaskController{
    index(req, res){
        var sql='SELECT * FROM posts';
      
        db.query(sql, function (err, data, fields) {
            res.render('index', {
                posts: data
            });
        });
    }
    
    create(req, res){
        res.render('add-post');
    }

    edit(req, res) {
        var id = req.query.id;
        var sql=`SELECT * FROM posts WHERE id = '${id}'`;
        
        db.query(sql, function (err, data, fields) {
            res.render('edit', {
                posts: data
            });
        });
      }

    save(req, res) {
        var id = req.body.id;
        var title = req.body.title;
        if (id) {
          var sql = `update posts set title = '${title}' where id = ${id};`;
        } else {
          var sql = `insert into posts(title) values('${title}');`;
        }
        db.query(sql, function (err) {
          if (err)    console.log(err);
          console.log("saved");
        })
        res.redirect('/');
      }

    delete(req, res) {
    var id = parseInt(req.query.id);
    var sql=`DELETE FROM posts WHERE id = '${id}'`;
    db.query(sql, function (err, data) {
        if (data.affectedRows==0) {
            alert(`post id=${id} does not exist`); 
        }
    });
        res.redirect('/');
    }

    search(req, res){
        var searchStr = req.query.searchStr;
        var sql=`SELECT * FROM posts WHERE title LIKE '%${searchStr}%'`;
        db.query(sql, function (err, data, fields) {
            res.render('index', {
                posts: data
            });
        });
    }
}

module.exports = new TaskController;