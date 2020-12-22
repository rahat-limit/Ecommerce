const { validationResult } = require('express-validator')
const bcrypt = require('bcryptjs')
const User = require('../model/User')
const jwt = require('jsonwebtoken')

module.exports = {
    register : async (req, res) => {
        try {
            const errors = validationResult(req)

            if (!errors.isEmpty()) return res.status(400).json({ msg: errors.array()[0].msg })

            const { email, name, password1 } = req.body;

            const user = await User.findOne({ email })

            if (user) return res.status(400).json({ msg: 'User is already registered'})

            const hashedPassword = await bcrypt.hash(password1, 10)

            const newUser = new User({ email, name, password: hashedPassword })

            await newUser.save()

            return res.status(200).json({ user: newUser })
        } catch (e) {
            return res.status(500).json({ msg: e.message })
        }
    },
    login: async (req, res) => {
        try {
            const errors = validationResult(req)

            if (!errors.isEmpty()) return res.status(400).json({ msg: errors.array()[0].msg })

            const { email, password } = req.body;

            const user = await User.findOne({ email })

            if (!user) return res.status(400).json({ msg: 'User is not registered'})

            const isMatch = await bcrypt.compare(password, user.password)

            if (!isMatch) return res.status(400).json({ msg: 'Invalid credentials' })

            const token = await jwt.sign({ user }, process.env.JWT_ACCESS_KEY, { expiresIn: '1d' })

            return res.status(200).json({ token, user })
        } catch (e) {
            return res.status(500).json({ msg: e.message })
        }
    },
    getUser: async (req, res) => {
        try {
            const user = await User.findOne({_id: req.user._id})

            const token = jwt.sign({ user }, process.env.JWT_ACCESS_KEY, { expiresIn: '1d' })

            return res.status(200).json({ token, user })
        } catch (e) {
            return res.status(500).json({ msg: e.message })
        }
    }
}