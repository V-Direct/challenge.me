const UserModel = require("../models/User")

const userService = {
    findAll: async (res) =>{
         await UserModel.find()
            .then((users) => {return res.json(users)})
            .catch((err) =>{return res.status(400).json("Error: " + err)});
    },
    findOne: async (pathVariable, res) =>{
        await UserModel.findOne({username: pathVariable})
            .then((user) => {return res.json(user)})
            .catch((err) => {return res.status(400).json("Error: "+err)});

    }
}

module.exports = userService;
