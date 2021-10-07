const { Post, User } = require('../models');



const postData = [
  {
    user_id: "",
    content: "TEST CONTENT1: LOREM IPSUM",
  },
  {
    user_id: "",
    content: "TEST CONTENT2: LOREM IPSUM",
  },
  {
    user_id: "",
    content: "TEST CONTENT3: LOREM IPSUM",
  },
  {
    user_id: "",
    content: "TEST CONTENT4: LOREM IPSUM",
  },
  {
    user_id: "",
    content: "TEST CONTENT5: LOREM IPSUM",
  },
  {
    user_id: "",
    content: "TEST CONTENT6: LOREM IPSUM",
  },
];

const seedPosts = async () => {
  try {
    const seedUID = await User.findOne();
    postData.forEach( (post) => {
    post.user_id = seedUID.id;
    });

    await Post.bulkCreate(postData)
  } catch (err) {
  console.log("ERROR IN POST SEED");
  };
};

module.exports = seedPosts;
