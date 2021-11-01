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
        // this function returns just a post by its post_id
        const postData = await Post.findByPk(pID);
        //const posts = await Post.findAll();
        //const posts2 = posts.map((post) => post.get({ plain: true }));
        //const jsonPost = postData.map((post) => post.get({ plain: true }));
        const jsonPost = postData.get({ plain: true });
        //posts = posts.get({ plain: true });
        //console.log("This is from inside getData: " + posts2);
        //console.log(JSON.stringify(postData));
        return jsonPost;
    } catch (err) {
        //console.log(process.env.JAWSDB_URL);
        console.log(`An error occurred when attemping to retrieve post ${pID}`);
    }
}

async function getPostwComm (pID) {
    try {
        // this returns all of the Comments associated with a Post
        const commData = await Comment.findAll({
            where: {post_id: pID}
          });
        // serializes the result so that it can be immediately used in a template
        const comms = commData.map((comment) => comment.get({ plain: true }));

        return comms;
    } catch (err) {
        console.log(`An error occurred when attemping to retrieve post ${pID} with comments`);
    };
};

async function getComment (cID) {
    try {
        // this returns a single comment
        const comData = await Comment.findByPk(cID);
        //const coms = comData.map((comment) => comment.get({ plain: true }));
        const coms = comData.get({ plain: true });
        return coms;
    } catch (err) {
        console.log(`An error occurred when attemping to retrieve comment ${cID}`);
    }
}

module.exports = { getUser, getPost, getComment, getPostwComm }