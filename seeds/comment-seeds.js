const { HashTag } = require('../models');

const hashtagData = [
  {
  post_id: "",
  content: "",
  commenter_username: "",
  },
  {
    post_id: "",
    content: "",
    commenter_username: "",
  }
];

const seedHashTags = () => HashTag.bulkCreate(hashtagData);

module.exports = seedHashTags;
