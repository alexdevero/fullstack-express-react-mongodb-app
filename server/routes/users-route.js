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

