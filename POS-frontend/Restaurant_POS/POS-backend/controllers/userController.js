const createHttpError = require('http-errors');
const User = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('../config/config');

const register = async(req,res,next) => {
           try{
            

               const {name,phone, email, password, role} = req.body;

               if(!name || !phone || !email || !password || !role){
                const err = createHttpError(400, 'All fields are required');    
                next(err);
               }

               const isUserExist = await User.findOne({email});
                if(isUserExist){
                    const err = createHttpError(400, 'User already exists');
                    next(err);
                }

                const user = {name, phone, email, password,role};
                const newUser = User(user);
                await newUser.save();
                res.status(201).json({
                    success:true,
                    message: "User registered successfully",
                    data:newUser
                });

           }catch(err){
               next(err);
           }
}


const login = async(req,res,next) => {
        
    try{
        const {email, password} = req.body;
        if(!email || !password){
            const err = createHttpError(400, 'Email and password are required');
           return next(err);
        }

        const user = await User.findOne({email});
        if(!user){
            const err = createHttpError(404, 'User not found');
            return next(err);
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch){
            const err = createHttpError(401, 'Invalid credentials');
           return next(err);
        }

        const accessToken = jwt.sign({_id: user._id},config.accessTokenSecret,{
            expiresIn:'1d'
        });

        res.cookie('accessToken', accessToken, {
            maxAge:1000 * 60 * 60 * 24, 
            httpOnly: true,
            sameSite: 'none',
            secure: true
        });

        res.status(200).json({success: true,message: 'Login successful', data:user})

    }catch(err){
         
        next(err);
        
    }

}

const getUserDate = async(req,res,next) =>{

    try{

        const user = await User.findById(req.user._id);
        res.status(200).json({
            success: true,
            data: user
        });

    } catch(err){
        next(err);
    }

}

module.exports ={register, login, getUserDate};