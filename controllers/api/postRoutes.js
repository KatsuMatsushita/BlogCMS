const router = require('express').Router();
const { Post } = require('../../models');

router.get("/:postID", async (req, res) => {
    try {
        const postData = await Post.findByPk(req.params.postID);

        res.status(200).json(postData);
    } catch (err) {
        res.status(500).json(err);
    };
});

module.exports = router;