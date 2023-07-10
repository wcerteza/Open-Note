const mongoose = require('mongoose')
const { Schema } = require('mongoose')

const coinSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  symbol: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  volume: {
    type: Number,
    required: true
  },
  rank: {
    type: Number,
    required: true
  }
})

module.exports = mongoose.model('Coin', coinSchema)