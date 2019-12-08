import React, { useEffect } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import { AMBER_API_KEY } from '../../constants';
import Card from '../Card';

const PriceHistory = () => {

<<<<<<< HEAD
    const [data, setData] = useState([]);
=======
    const DAYS = 30;
    const records = Array.apply(null, Array(DAYS));
>>>>>>> buy/sell cards

    useEffect(() => {

        async function getPrices() {

            try {
                const result = await axios.get(`https://web3api.io/api/v2/transactions/gas/percentiles`, { headers: { 'x-api-key': AMBER_API_KEY }});
                const prices = result.data.payload;
                console.log(prices);
                // setData(Object.keys(percentiles).map(p => percentiles[p] / 1000000));
            } catch(err) {
                console.error(err);
            }

        }

        getPrices();

    }, []);

    return (
        <Card title="Price History">
            <Line data={{
                labels: [],
                datasets: [{
                    data,
                    backgroundColor: data.map(d => '#01CDFE')
                }]
            }} />
        </Card>
    )


};

export default PriceHistory;