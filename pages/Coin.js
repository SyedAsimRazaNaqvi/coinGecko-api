import React from 'react'
const Coin = ({ name, image, symbol, volume, price, priceChange, marketcap }) => {
    console.log({ name, image, symbol, volume, price, priceChange, marketcap });

    return (
        <div className="coin-container">
            <div className="coin-row">
                <div className="coin">
                    <img src={image} className="coin-img" />
                    <h1 className="text-base w-150" >{name}</h1>
                    <p className="uppercase" >{symbol}</p>
                </div>
                <div className="coin-data">
                    <p className="w-110" >${price}</p>
                    <p className="w-155" >${volume.toLocaleString()}</p>
                    {priceChange < 0 ? (<p className="text-red-500 w-100">
                        {priceChange.toFixed(2)}%
                    </p>) : (<p className="text-green-500 w-100">
                        {priceChange.toFixed(2)}%
                    </p>)}
                    <p className="w-230" >
                        Market Cap: {marketcap.toLocaleString()}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Coin
