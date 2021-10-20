const router = require('express').Router();
const { Post } = require('../../models');
const Data = require("../../utils/getData");

router.get("/:postID", async (req, res) => {
    try {
        //const postData = await Post.findByPk(req.params.postID);
        postData = Data.getPost(req.params.postID);

        res.status(200).json(postData);

        /* const postData = await Post.findAll({
            where: {user_id: req.session.user_id}
          });
      
          const posts = postData.map((postCol) => postCol.get({ plain: true }));
          console.log(posts);
          res.render('dashboard', {
            ...user,
            posts,
            logged_in: true
          }); */
    } catch (err) {
        res.status(500).json(err);
    };
});

// in dashboard.handlebars, the HTML form is used to send the data to this route, and does not need its own eventListener
// this makes the code simpler to maintain and more efficient
router.post("/", async (req, res) => {
    try {
        //console.log(req.body.title);
        //console.log(req.body.content);
        //this injects the logged in user_id into the req.body
        req.body.user_id = req.session.user_id;
        //console.log(req.body);
        // this creates an entry in the Post table using the data in req.body
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