const router = require('express').Router(),
commentController = require('../controllers/comment')


router.get('/',commentController.getAllComment)
router.get('/:id',commentController.getOneComment)
router.post('/',commentController.createComment)
router.patch('/:id',commentController.updateComment)
router.delete('/:id',commentController.deleteComment)


module.exports = router