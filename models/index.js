// import all models
const Post = require("./Post");
const User = require("./User");
const Vote = require("./Vote");

// create associations
User.hasMany(Post, {
  foreignKey: "user_id",
});

Post.belongsTo(User, {
  foreignKey: "user_id",
});

//creating associations so when Post is queried can see how many total votes user creates

User.belongsToMany(Post, {
  through: Vote,
  as: "voted_posts",
  foreignKey: "user_id",
});

Post.belongsToMany(User, {
  through: Vote,
  as: "voted_posts",
  foreignKey: "post_id",
});

//associate the Vote model with the User and Post models
Vote.belongsTo(User, {
  foreignKey: 'user_id'
});

Vote.belongsTo(Post, {
  foreignKey: 'post_id'
});

User.hasMany(Vote, {
  foreignKey: 'user_id'
});

Post.hasMany(Vote, {
  foreignKey: 'post_id'
});

module.exports = { User, Post };
