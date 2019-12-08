import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import { AMBER_API_KEY } from '../../constants';
import Card from '../Card';
import moment from 'moment';

const PriceHistory = () => {

    const DAYS = 30;
    const records = Array.apply(null, Array(DAYS));

    const [data, setData] = useState([]);

    useEffect(() => {

        async function getPrices() {

            try {
                const result = await axios.get(`https://web3api.io/api/v2/transactions/gas/percentiles`, { headers: { 'x-api-key': AMBER_API_KEY }});
                const prices = result.data.payload;
                console.log(prices);
            } catch(err) {
                console.error(err);
            }

        }

        getPrices();

    }, []);

    return (
        <Card title="30-Day Price History">
            <Line data={{
                labels: records.map((val, idx) => moment().subtract(idx, 'day').format('MM/DD')).reverse(),
                datasets: [{
                    data: records.map(i => Math.floor(Math.random() * 4) + 8),
                    backgroundColor: records.map(d => '#01CDFE'),
                    fill: false,
                    labels: {
                        fontFamily: '"Courier", monospace'
                    }
                }]
            }}
            options={{
                legend: {
                    display: false,
                    labels: {
                        fontFamily: 'Courier',
                        fontColor: 'green'
                    }
                },
                scales: {
                    yAxes: [{
                        display: true,
                        ticks: {
                            beginAtZero: true,
                            max: 14,
                            min: 0
                        }
                    }]
                },
            }} />
        </Card>
    )


};

export default PriceHistory;