const express = require('express');
const potatoController = require("../controllers/potatoController")

const router = express.Router();

router.get('/', potatoController.getAllPotatoes);
router.get('/:id', potatoController.getAllPotatoes);

module.exports = router;
