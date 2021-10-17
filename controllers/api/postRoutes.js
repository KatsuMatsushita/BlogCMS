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

// in dashboard.handlebars, the HTML form is used to send the data to this route, and does not need its own eventListener
// this makes the code simpler to maintain and more efficient
router.post("/", async (req, res) => {
    try {
        console.log(req.body.title);
        console.log(req.body.content);
        req.body.user_id = req.session.user_id;
        //console.log(req.body);
        const postData = await Post.create(req.body);
        res.status(200).json(postData);
    } catch (err) {
        res.status(500).json("Error when attempting to post");
    };
});

module.exports = router;