const mongoose = require('mongoose')

const SubscriberSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  date: {
    type: String,
    required: true
  }
})

const Subscriber = mongoose.model('Subscriber', SubscriberSchema)

module.exports = Subscriber
