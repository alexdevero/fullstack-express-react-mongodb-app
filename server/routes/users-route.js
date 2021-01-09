const express = require('express')
const User = require('./../models/users-model')

const router = express.Router()

// Get all existing users
router.get('/', async (req, res) => {
  try {
    const allUsers = await User.find()
    res.json(allUsers)
  }

  catch(err) {
    res.status(500).json({
      message: err.message
    })
  }
})

// Get existing user
router.get('/:username', async (req, res, next) => {
  try {
    const user = await User.find({ username: req.params.username })

    if (user === null || (Array.isArray(user) && user.length === 0)) {
      res.status(404).json({ message: 'Can\'t find specified user.' })
    } else {
      res.json(user)
      next()
    }
  }

  catch (err) {
    res.status(500).json({
      message: err.message
    })
  }
})

// Create new user
router.post('/create', async (req, res) => {
  const user = new User({
    name: req.body.name,
    username: req.body.username,
    email: req.body.email,
    password: req.body.password
  })

  try {
    const newUser = await user.save()

    res.status(200).json({ message: 'User created.' })
  }

  catch (err) {
    res.status(400).json({ message: err.message })
  }
})

