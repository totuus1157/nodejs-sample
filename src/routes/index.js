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

router.get('/add', (req, res,next) => {
  const data = {
    title: '新規追加'
  }
  res.render('add', data);
});

router.post('/add', (req, res, next) => {
  db.sequelize.sync().then(() => db.Tanks.create({
    name: req.body.name,
    crew: req.body.crew,
    length: req.body.length,
    weight: req.body.weight,
    speed: req.body.speed,
    team: req.body.team
  })).then(tanks => {
    res.redirect('/');
  });
});

router.get('/edit', (req, res, next) => {
  db.Tanks.findByPk(req.query.id).then(tanks => {
      const data = {
        title: '更新',
        form: tanks
      }
    res.render('edit', data);
  });
});

router.post('/edit', (req, res, next) => {
  db.sequelize.sync().then(() => db.Tanks.update({
    name: req.body.name,
    crew: req.body.crew,
    length: req.body.length,
    weight: req.body.weight,
    speed: req.body.speed,
    team: req.body.team
  },{
    where: {id:req.body.id}
  })).then(tanks => {
    res.redirect('/');
  });
});

router.get('/delete', (req, res, next) => {
  db.Tanks.findByPk(req.query.id).then(tanks => {
    const data = {
      title: '削除',
      form: tanks
    }
    res.render('delete', data);
  });
});

router.post('/delete', (req, res, next) => {
  db.sequelize.sync().then(() => db.Tanks.destroy({
    where: {id:req.body.id}
  })).then(tanks => {
    res.redirect('/');
  });
});

module.exports = router;
