var db=require('../models/database');
var task = require('../models/Task');
class TaskController{
    index(req, res){
        task.index(function (err, data, fields) {
            res.render('index', {
                posts: data
            });
        })
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
        var data = {
            id: id,
            title: title
        }
        if (data.id) {
          task.edit(data);
        } else {
          task.create(data);
        }
        res.redirect('/');
    }

    delete(req, res) {
        var id = parseInt(req.query.id);
        var data = {
            id: id
        };
        task.delete(data);
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