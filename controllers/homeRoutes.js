const router = require('express').Router();
const { Post, User } = require('../models');
const withAuth = require('../utils/auth');
const Data = require("../utils/getData");

router.get('/', async (req, res) => {
  try {
    // Get all posts and JOIN with user data
    const postData = await Post.findAll({
      include: [
        {
          model: User,
          attributes: ['username'],
        },
      ],
    });
    
    // Serialize data so the template can read it
    const posts = postData.map((project) => project.get({ plain: true }));
    console.log(posts);
    // Pass serialized data and session flag into template
    res.render('homepage', { 
      posts, 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/posts/:postID", async (req, res) => {
  try {
    //const getPostData = await Post.findByPk(req.params.postID);
    const postData = await Data.getPost(req.params.postID);
    //const postData = await Post.findByPk(req.params.postID);
    //console.log("This is from inside just the router.get" + process.env.JAWSDB_URL);
    //console.log(postData);
    res.status(200).json(postData);
    } catch (err) {
        res.status(500).json(err);
    };
})

// Use withAuth middleware to prevent access to route
router.get('/dashboard', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] }
    });
    const user = userData.get({ plain: true });
    // console.log(user);
    const postData = await Post.findAll({
      where: {user_id: req.session.user_id}
    });

    const posts = postData.map((postCol) => postCol.get({ plain: true }));
    console.log(posts);
    res.render('dashboard', {
      ...user,
      posts,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/dashboard');
    return;
  }

  res.render('login');
});

router.get("/signup", (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/dashboard');
    return;
  }
  res.render("signup");
});

module.exports = router;
