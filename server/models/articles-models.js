const mongoose = require('mongoose')

const ArticleSchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  }
})

const Article = mongoose.model('Article', ArticleSchema)

module.exports = Article
