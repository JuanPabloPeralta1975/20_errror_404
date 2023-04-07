const express = require('express');
const router = express.Router();

const mainController = require('../controller/mainController');

router.get('/', mainController.index);

router.get('/register',mainController.register);

router.post('/register',mainController.create)

router.get('/login',mainController.login);

router.get('/list', mainController.list);

router.get('/search',mainController.search);

router.get('/edit/:idUser',mainController.edit);

router.put('/edit', function(req,res){
    res.send('FUI POR PUT')
});

router.delete('/delete/:idUser', function(req,res){
    res.send('FUI POR DELETE')
})

module.exports = router;