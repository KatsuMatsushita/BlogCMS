const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Post extends Model {}

Post.init(
  {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    user_id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'user',
        key: 'id',
      },
    },
    title: {
      type: DataTypes.STRING,
      required: true,
      defaultValue: "Lorem Ipsum"
    },
    content: {
      type: DataTypes.TEXT,
      required: true,
      defaultValue: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`
    },
    date_created: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    date_updated: {type: DataTypes.DATE},
    date_deleted: {type: DataTypes.DATE}
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'post',
  }
);

module.exports = Post;
