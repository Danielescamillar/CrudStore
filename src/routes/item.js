const express = require('express');
const { getItems, getItem, createItem, updateItem, deleteItem } = require('../controllers/item');
const auth = require('../middleware/sesion');
const checkRol = require('../middleware/rol');
const checkInit = require('../middleware/cache');

const router = express.Router();

// Parsear JSON y urlencoded en el cuerpo de la solicitud
router.use(express.json());
router.use(express.urlencoded({ extended: true }));
	
router.get('/',checkInit, getItems)
router.get('/:id', getItem)
router.post('/', auth,checkRol(['admin']), createItem)
router.put('/:id',auth,checkRol(['user' ]), updateItem)
router.delete('/:id',auth,checkRol(['admin']), deleteItem )


module.exports = router;