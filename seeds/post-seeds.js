const { Post } = require('../models');

const postData = [
  {
    user_id: "",
    content: "TEST CONTENT: LOREM IPSUM",
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
