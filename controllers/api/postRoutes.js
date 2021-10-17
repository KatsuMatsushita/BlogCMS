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
        // this reloads the dashboard page instead of trying to close the submission modal
        res.redirect('/dashboard');
        //res.status(200).json(postData);
    } catch (err) {
        res.status(500).json("Error when attempting to post");
    };
});

router.delete("/:postID", async (req, res) => {
    try {
        const delData = await Post.destroy({
            where: {
                id: req.params.postID
            }
        });
        res.status(200).json(delData);
    } catch (err) {
        res.status(500).json("An error was encountered while attempting to delete a post");
    };
})

module.exports = router;