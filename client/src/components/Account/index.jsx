import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import getWeb3 from "../../getWeb3";
import Card from "../Card";
import Button from "../Button";
import InputField from "../InputField";
import Loading from '../Loading';
import { ethForToken, ExchangeContractEthers } from "../../UniswapInterface";

const InlineButton = styled(Button)`
    display: inline-block;
    width: 49%;
`;

const Account = ({ price }) => {
  const [account, setAccount] = useState(null);
  const [amount, setAmount] = useState("");
  const [transacting, setTransacting] = useState(false);

  async function getAccount() {
    try {
      console.log("get account");
      const web3 = await getWeb3();
      console.log(web3);
      const accounts = await web3.eth.getAccounts();
      console.log(accounts);
      setAccount(accounts[0]);
    } catch (err) {
      console.error(err);
    }
  }


  const buy = async() => {
    setTransacting(true);
    const contr = await ExchangeContractEthers();
    contr.on("TokenPurchase", () => {
        setTransacting(false);
        console.log('set transacting false')
    })

    await ethForToken(amount);

  };

  const sell = () => {
    console.log(amount);
    alert("Sell");
  };

  useEffect(() => {
    async function getAccount() {
      try {
        console.log("get account");
        const web3 = await getWeb3();
        console.log(web3);
        const accounts = await web3.eth.getAccounts();
        console.log(accounts);
        setAccount(accounts[0]);
      } catch (err) {
        console.error(err);
      }
    }

    getAccount();
  }, []);

  return (
    <Card title={account ? "Tokens" : "Hi Stranger"}>
      {account ? (
        <div className="row">
          <div className="col-md-12 text-center">
            <InputField
              value={amount}
              placeholder="100"
              onChange={ev => setAmount(ev.target.value)}
            />
            <strong>Total:</strong> {parseFloat(amount * price, 2)}
            <InlineButton onClick={buy}>Buy</InlineButton>
            <InlineButton onClick={sell}>Sell</InlineButton>
          </div>
        </div>
      ) : (
        <div className="row">
          <div className="col-md-12 text-center">
            <p>In order to transact, sign in with MetaMask.</p>
            <Loading type="bar" text="Loading..." />
          </div>
        </div>
      )}
    </Card>
  );
};

Account.defaultProps = {
  price: 12.13
};

export default Account;
