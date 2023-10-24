var express = require('express');
var router = express.Router();
var db=require('../models/database');

/* GET home page. */
router.get('/', function(req, res, next) {
  var sql='SELECT * FROM posts';
  
  db.query(sql, function (err, data, fields) {
      res.render('index', {
          posts: data
      });
  });
});

// delete item
router.get('/delete', function(req, res) {
  var id = parseInt(req.query.id);
  var sql=`DELETE FROM posts WHERE id = '${id}'`;
  db.query(sql, function (err, data) {
    if (data.affectedRows==0) {
      console.log(`post id=${id} does not exist`); 
    }
  });
  res.redirect('/');
})

//add form
router.get('/add', function(req, res) {
  res.render('add-post')
})

//edit form
router.get('/edit', function(req, res) {
  var id = req.query.id;
  var sql=`SELECT * FROM posts WHERE id = '${id}'`;
  
  db.query(sql, function (err, data, fields) {
      res.render('edit', {
          posts: data
      });
  });
})

//save post
router.post('/save', function(req, res) {
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
})

module.exports = router;
