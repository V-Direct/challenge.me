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
            .catch((err) => {return res.status(400).json("Error: " + err)});

    },
    insert: async (userObject, res) => {
        
        await UserModel.create(userObject)
            .then((user) => {return res.json(user)})
            .catch((err) => {return res.status(400).json("Error: " + err)});
    },
    delete: async (pathVariable, res) => {
        await UserModel.deleteOne({username: pathVariable})
            .then((result) => {
                if(result.n === 0){
                    return res.status(404).json("Error: User not found");
                }else{
                    return res.status(200).json("Message: User successfully deleted");
                }
            });
    },
    update: async (pathVariable, updatedField) => {
        await UserModel.update({username: pathVariable}, updatedField)    
    }
}

module.exports = userService;
