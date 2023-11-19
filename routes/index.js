var express = require('express');
var router = express.Router();
var taskController = require('../controller/TaskController');
/* GET home page. */
router.get('/', taskController.index);

//add form
router.get('/create', taskController.create);

// delete item
router.get('/delete', taskController.delete);

//edit form
router.get('/edit', taskController.edit);

//save post
router.post('/save', taskController.save);

//search tasks
router.get('/search', taskController.search);

module.exports = router;
