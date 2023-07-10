const Coin = require('../models/coin')
const axios = require('axios')

const GetCoins = async (req, res) => {
  try {
    const response = await axios.get(
      'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en'
    )
    const coinList = response.data
    res.send(coinList)
  } catch (error) {
    throw error
  }
}

const CreateCoin = async (req, res) => {
  try {
    const coin = await Coin.create({ ...req.body })
    res.send(coin)
  } catch (error) {
    throw error
  }
}

const UpdateCoin = async (req, res) => {
  try {
    const coin = await Coin.findByIdAndUpdate(req.params.coin_id, req.body)
    res.send(coin)
  } catch (error) {
    throw error
  }
}

const DeleteCoin = async (req, res) => {
  try {
    await Coin.deleteOne({ _id: req.params.coin_id })
    res.send({ msg: 'Coin Deleted', payload: req.params.coin_id, status: 'Ok' })
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetCoins,
  CreateCoin,
  UpdateCoin,
  DeleteCoin
}