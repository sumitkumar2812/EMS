const userModel = require("../models/userModel")

//login contoller

const loginController = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await userModel.findOne({ email, password });
        if (!user) {
            return res.status(404).send("User not found")
        }
        res.status(200).json({ success: true, user })
    } catch (error) {
        console.log(error)
        return res.status(400).json({
            success: false,
            error
            
        })
        
    }
}

//resister controller

const resisterController = async (req, res) => {
    try {
        const newUser = new userModel(req.body)
        await newUser.save()
        res.status(201).json({
            success: true,
            newUser
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            error
        })
    }
}

module.exports = { loginController, resisterController };