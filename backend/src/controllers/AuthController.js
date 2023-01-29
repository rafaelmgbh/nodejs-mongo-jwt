const express = require('express');

const UserModel = require('../models/User');

const router = express.Router();

router.post('/register', async (req, res) => { 
   return res.json({ error: false, message: 'Acesso bem sucedido' }); 
});

module.exports = router;