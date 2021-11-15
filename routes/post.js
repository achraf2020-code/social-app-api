const router = require('express').Router(),
postController = require('../controllers/post')


router.get('/',postController.getAllPosts)
router.get('/:id',postController.getOnePost)
router.post('/',postController.createPost)
router.patch('/:id',postController.updateOnePost)
router.delete('/:id',postController.deleteOnePost)


module.exports = router