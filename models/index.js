const User = require('./User');
const Post = require('./Post');
const Comment = require("./Comment");

User.hasMany(Post, {
  // User is the Source, Post is the Target, foreign key is made on the target
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Post.belongsTo(User, {
  // Post is the Source, User is the Target, foreignKey is made on the Source
  foreignKey: 'user_id'
});

Comment.belongsTo(Post, {
  foreignKey: "post_id"
});

Post.hasMany(Comment, {
  foreignKey: "post_id",
  onDelete: "CASCADE"
})

module.exports = { User, Post, Comment };
