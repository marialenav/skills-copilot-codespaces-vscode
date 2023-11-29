// Create web server
// Import module
const express = require('express');
const commentController = require('../controllers/commentController');
// Handle request
router.post('/create', commentController.comment_create);
router.post('/delete', commentController.comment_delete);