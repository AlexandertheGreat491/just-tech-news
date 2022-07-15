const User = require("./User");
const Post = require("./Post");

//create associations
User.hasMany(Post, {
  foreignKey: "user_id",
});

/*This association creates the reference for the id
column in the User model to link to the corresponding foreign key pair
, which is the user_id in the Post model. */

Post.belongsTo(User, {
  foreignKey: "user_id",
});
// defines the relationship between the Post model and the User

module.exports = { User, Post };
