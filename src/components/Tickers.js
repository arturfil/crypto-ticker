import React, { Component } from 'react';

import Cryptocurrency from './Cryptocurrency';
import './Tickers.css';

class Tickers extends Component {
    state = {
        data: [
            {
                id: "bitcoin",
                name: "Bitcoin",
                symbol: "BTC",
                price_usd: "1",
                percent_change_1h: "0",
                percent_change_1h: "0",
                percent_change_1h: "0",
            },
            {
                id: "etherium",
                name: "Etherium",
                symbol: "ETH",
                price_usd: "1",
                percent_change_1h: "0",
                percent_change_1h: "0",
                percent_change_1h: "0",
            },
            {
                id: "litecoin",
                name: "Litecoin",
                symbol: "LTC",
                price_usd: "1",
                percent_change_1h: "0",
                percent_change_1h: "0",
                percent_change_1h: "0",
            }
        ]
    }

    render () {
        var tickers = this.state.data.map((currency) => 
        <Cryptocurrency data={currency} key={currency.id} />
        );
        return(
            <div className="tickers-container">
                <ul className="tickers"> {tickers} </ul>
                <p>Information udpated every 10 seconds thanks to coinmarketcap.com</p>
            </div>
        );
    }
}

export default Tickers;  