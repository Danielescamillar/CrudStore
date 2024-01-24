const express = require('express');
const { register, login } = require('../controllers/auth');


const router = express.Router();

// // Parsear JSON y urlencoded en el cuerpo de la solicitud
// router.use(express.json());
// router.use(express.urlencoded({ extended: true }));

router.post('/register',register)
router.post('/login',login)


module.exports = router;