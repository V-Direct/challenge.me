const ChallengeModel = require("../models/Challenge")

const userService = {
    findAll: async (res) =>{
         await ChallengeModel.find()
            .then((challenges) => {return res.json(challenges)})
            .catch((err) =>{return res.status(400).json("Error: " + err)});
    },
    findOne: async (pathVariable, res) =>{
        await ChallengeModel.findOne({title: pathVariable})
            .then((challenge) => {return res.json(challenge)})
            .catch((err) => {return res.status(400).json("Error: " + err)});

    },

    findCreatorChallenges: async (pathVariable, res) =>{
        await ChallengeModel.find({creator: pathVariable})
        .then((challenge) => {return res.json(challenge)})
        .catch((err) => {return res.status(400).json("Error: " + err)});
    },
    
    insert: async (challengeObject, res) => {
        
        await ChallengeModel.create(challengeObject)
            .then((challenge) => {return res.json(challenge)})
            .catch((err) => {return res.status(400).json("Error: " + err)});
    },
    delete: async (pathVariable, res) => {
        await ChallengeModel.deleteOne({title: pathVariable})
            .then((result) => {
                if(result.n === 0){
                    return res.status(404).json("Error: Challenge not found");
                }else{
                    return res.status(200).json("Message: Challenge successfully deleted");
                }
            });
    },
    update: async (pathVariable, updatedField) => {
        await UserModel.update({title: pathVariable}, updatedField)    
    }
}



module.exports = userService;
