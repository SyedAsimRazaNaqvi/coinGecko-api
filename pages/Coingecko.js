import axios from 'axios'
import React, { useState, useEffect } from 'react'
import Coin from './Coin'

const Coingecko = () => {
    const [coin, setcoin] = useState([])
    const [searchCoin, setsearchCoin] = useState('')
    const coingecko = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"

    useEffect(() => {
        axios.get(coingecko)
            .then(response => {
                setcoin(response.data);
            })
            .catch((error) => {
                alert("Failed to fetch")
                console.log(error);
            })

    }, [])

    const handleChange = (e) => {

        setsearchCoin(e.target.value);
    }

    const filteredCoins = coin.filter(coin => {
        return coin.name.toLowerCase().includes(searchCoin.toLowerCase())
    })


    return (
        <div className="coin-app">
            <h2 className="text-lg">Coin Gecko API</h2>
            <div className="coin-search">
                <form>
                    <span className="coin-text">Search a currency: </span>
                    <input className="coin-input" type="text" placeholder="Search" onChange={handleChange} />
                </form>
            </div>

            {filteredCoins.map((coin) => {
                return (<Coin key={coin.id} volume={coin.total_volume} priceChange={coin.price_change_percentage_24h} name={coin.name} symbol={coin.symbol} image={coin.image} marketcap={coin.market_cap} price={coin.current_price} />)
            })}

        </div>
    )
}

export default Coingecko
