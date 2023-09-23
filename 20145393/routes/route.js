const express = require('express');
const router = express.Router();
const controller = require('../controllers/controllers');

router.get('/', controller.getAllMembers);
router.post('/MSSV/:id', controller.addMember);
router.get('/MSSV/:id', controller.getMemberById);
router.get('/message/:id?', controller.getMembersList);

module.exports = router;