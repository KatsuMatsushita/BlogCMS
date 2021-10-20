const { Post, User, Comment } = require('../models');

//these get data from the database then serializes the data, then sends it back so that it can be used in a handlebars template
async function getUser (uID) {
    try {
        const userData = await User.findByPk(uID);
        const user = userData.get({ plain: true });
        return user;
    } catch (err) {
        console.log(`An error occurred when attemping to retrieve user ${uID}`);
    }
}

async function getPost (pID) {
    try {
        const postData = await Post.findByPk(pID);
        //const posts = postData.map((post) => post.get({ plain: true }));
        return posts;
    } catch (err) {
        console.log(`An error occurred when attemping to retrieve post ${pID}`);
    }
}

async function getComment (cID) {
    try {
        const comData = await Comment.findByPk(cID);
        const coms = comData.map((comment) => comment.get({ plain: true }));
        return coms;
    } catch (err) {
        console.log(`An error occurred when attemping to retrieve post ${cID}`);
    }
}

module.exports = { getUser, getPost, getComment }