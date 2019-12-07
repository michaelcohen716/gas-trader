import React, { useState, useEffect } from 'react';
import getWeb3 from "../../getWeb3";
import Card from '../Card';
import Button from '../Button';

const Account = () => {

    const [account, setAccount] = useState(null);

    async function getAccount() {

        try {
            console.log('get account');
            const web3 = await getWeb3();
            console.log(web3);
            const accounts = await web3.eth.getAccounts();
            console.log(accounts);
            setAccount(accounts[0]);
        } catch(err) {
            console.error(err);
        }

    }

    useEffect(() => {
        console.log('one time.');
    }, []);

return (
    <Card title={account ? 'Your Account' : 'Hi Stranger'}>
        {
            account ? (
                <div className="row">
                    <div className="col-md-12">
                        <h1>Buy buy buy</h1>
                    </div>
                </div>
            ) : (
                <div className="row">
                    <div className="col-md-12 text-center">
                        <p>In order to transact, sign in with MetaMask.</p>
                        <Button onClick={getAccount}>Launch MetaMask</Button>
                    </div>
                </div>
            )
        }
    </Card>
);

}



export default Account;