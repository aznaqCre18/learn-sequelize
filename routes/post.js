const express = require('express');
const router = express.Router();
const postController = require('./../controllers/postController');

router.post('/add-post', postController.createPost);
router.get('/get-post', postController.getAllPost);

module.exports = router;