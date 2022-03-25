const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

router.get('/', userController.getAllUser);
router.post('/add-user', userController.addUser);
router.get('/:id', userController.getUserById);
router.put('/edit-user/:id', userController.updateUser);
router.delete('/delete-user/:id', userController.deleteUser);

module.exports = router;