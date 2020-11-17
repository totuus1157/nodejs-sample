const express = require('express');
const router = express.Router();
const db = require('../models/index');

/* GET home page. */
router.get('/', function(req, res, next) {
  db.Tanks.findAll().then(tanks => {
    const data = {
      title: '大洗女子学園 所有戦車リスト',
      content: tanks
    }
  	res.render('index', data);
  });
});

module.exports = router;
