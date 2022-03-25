const models = require('./../models');

const createPost = async (req, res) => {
    const { userId, text } = req.body;
    try {
        const post = await models.post.create({
            text,
            userId
        })

        res.status(200).send({
            status: 500,
            message: 'Success add post',
            data: post
        })
    } catch (error) {
        res.status(500).send({
            status: 500,
            message: 'Failed to create post'
        });
    }
}

const getAllPost = async (req, res) => {
    try {
        const post = await models.post.findAll({
            include: [models.user]
        });

        res.status(200).send({
            status: 200,
            message: 'Success to get all posts',
            data: post
        });
    } catch (error) {
        res.status(500).send({
            status: 500,
            message: 'Failed to get all posts'
        });
    }
}

module.exports = { createPost, getAllPost };