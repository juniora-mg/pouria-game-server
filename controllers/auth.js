import User from '../model/users.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config({quiet: true})

import { validationResult } from 'express-validator'

function login(req, res) {
    
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors })
    }

    const { username, password } = req.body 

    const user = new User

    const result = user.read(username)

    bcrypt.compare(password, result.password)
        .then(ans => {
            if (!ans) {   
                return res.send({error: "password is incorrect"})
            }
            
            const token = jwt.sign({id: result.id}, process.env.SECRET_KEY, {expiresIn: '30d'})
            res.json({token})
        })


}

function register(req, res) {
     
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.json({ errors })
    }

    const { username, password, record } = req.body;        

    const user = new User
    
    user.insert(username, password, record)
        .then(info => {
            res.send({
                id: info.lastInsertRowid,
                username,
                record
            })
        })
        .catch(() => {
            res.send({
                code: 400,
                message: "bad request (maybe your username is not unique)"
            })
        })
}

export {login, register}
