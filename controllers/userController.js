const models = require('./../models');

const getAllUser = async (req, res) => {
    try {
        const User = await models.user.findAll();
        
        res.status(200).send({
            status: 200,
            message: 'Success get all data users',
            data: User,
        })
    } catch (error) {
        res.status(500).send({
            status: 500,
            message: "Failed get all data users",
        })
    }
}

const addUser = async (req, res) => {
    const { name, age } = req.body;
    try {
        const User = await models.user.create({
            name,
            age
        });

        res.status(200).send({
            status: 200,
            message: 'Success add user',
            data: User
        })
    } catch (error) {
        res.status(500).send({
            status: 500,
            message: "Failed add user",
        })
    }
}

const getUserById = async (req, res) => {
    const { id } = req.params;
    try {
        const User = await models.user.findOne({
            where: {id},
            include: 'posts'
        })

        if(User === null) {
            res.status(404).send({
                status: 404,
                message: 'User not found'
            })
        } else {
            res.status(200).send({
                status: 200,
                message: "Success get user",
                data: User
            })
        }
    } catch (error) {
        res.status(500).send({
            status: 500,
            message: "Failed to get user",
        })
    }
}

const updateUser = async (req, res) => {
    const { id } = req.params;
    const { name, age } = req.body;

    try {
        const editUser = await models.user.findOne({where: {id}});

        editUser.name = name;
        editUser.age = age;

        editUser.save();

        res.status(200).send({
            status: 200,
            message: 'success edit user',
        })
    } catch (error) {
        res.status(500).send({
            status: 500,
            message: 'Failed to update user'
        });
    }
}

const deleteUser = async (req, res) => {
    const { id } = req.params;

    try {
        const userDelete = await models.user.findOne({
            where: {id}
        });

        userDelete.destroy();

        res.status(200).send({
            status: 200,
            message: 'Success to delete user'
        });
    } catch (error) {
        res.status(500).send({
            status: 500,
            message: 'Failed to delete user'
        });
    }
}

module.exports = { addUser, getAllUser, getUserById, updateUser, deleteUser };