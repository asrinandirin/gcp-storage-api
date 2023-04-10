const express = require('express');
const router = express.Router();
const configsController = require('../controller/configController') 

//DEFAUL URL = /configs

router.get('/', configsController.getAllConfigs)
router.get('/download/:name', configsController.download)
router.get('/delete/:name', configsController.delete)
module.exports = router;
