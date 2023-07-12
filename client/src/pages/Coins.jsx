import React, { lazy, Suspense, useState, useEffect } from 'react'
const CoinCard = lazy(() => import('../components/CoinCard'))
import { GetCoins } from '../services/CoinServices'
import { useNavigate } from 'react-router-dom'

const Coins = ({ user }) => {
  let navigate = useNavigate()
  const [coins, setCoins] = useState([])

  useEffect(() => {
    const handleCoins = async () => {
      const data = await GetCoins()
      setCoins(data)
    }
    handleCoins()
  }, [])

  const handleCardHover = (index) => {
    const updatedCoins = [...coins]
    updatedCoins[index].isHovered = !updatedCoins[index].isHovered
    setCoins(updatedCoins)
  }

  return user ? (
    <div className="cardWrapper">
      {coins.map((coin, index) => (
        <Suspense fallback={<div>Loading...</div>}>
          <div key={index}>
            <CoinCard
              coin={coin}
              index={index}
              handleCardHover={handleCardHover}
            />
          </div>
        </Suspense>
      ))}
    </div>
  ) : (
    <div>
      <h3>Please sign in to view Coins</h3>
      <button onClick={() => navigate('/signin')}>Sign In</button>
    </div>
  )
}

export default Coins