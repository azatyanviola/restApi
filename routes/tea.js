'use strict';

const express = require('express'); 

const router  = express.Router(); 
const teaController = require('../controllers/tea'); 

router.get('/', teaController.getMany);
router.get('/tea/:id', teaController.getOne);
router.post('/tea', teaController.newTea); 
router.put('/tea/:id',teaController.update)
router.delete('/tea/:id', teaController.deleteOne);





module.exports = router; // export to use in index.js