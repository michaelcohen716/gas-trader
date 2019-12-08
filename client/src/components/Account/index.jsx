import React, { useState, useEffect } from "react";
import styled from "styled-components";
import getWeb3 from "../../getWeb3";
import Card from "../Card";
import Button from "../Button";
import InputField from "../InputField";
import Loading from "../Loading";
import { ethForToken, ExchangeContractEthers } from "../../UniswapInterface";

const Account = ({ price }) => {
  const [account, setAccount] = useState(null);
  const [buyAmount, setBuyAmount] = useState("");
  const [sellAmount, setSellAmount] = useState("");
  const [buying, setBuying] = useState(false);
  const [selling, setSelling] = useState(false);

  const buy = async () => {
    setBuying(true);
    const contr = await ExchangeContractEthers();
    contr.on("TokenPurchase", () => {
      setBuying(false);
      console.log("set transacting false");
    });

    await ethForToken(buyAmount);
  };

  const sell = () => {
    console.log(sellAmount);
    setSelling(true);
    alert("Sell");
    setSelling(false);
  };

  useEffect(() => {
    async function getAccount() {
      try {
        const web3 = await getWeb3();
        const accounts = await web3.eth.getAccounts();
        setAccount(accounts[0]);
      } catch (err) {
        console.error(err);
      }
    }
    getAccount();
  }, []);

  return account ? (
    <React.Fragment>
      <Card title="Buy GasSynth">
        <div className="row">
          <div className="col-md-12 text-center">
            <InputField
              value={buyAmount}
              placeholder="ETH Amount"
              onChange={ev => setBuyAmount(ev.target.value)}
            />
            {buying ? (
              <Loading type="bar" text="Buying..." />
            ) : (
              <React.Fragment>
                <p>
                  <strong>Total GasSynth:</strong>{" "}
                  {parseFloat(buyAmount * price, 2)}
                </p>
                <Button onClick={buy}>Buy</Button>
              </React.Fragment>
            )}
          </div>
        </div>
      </Card>

      <Card title="Sell GasSynth">
        <div className="row">
          <div className="col-md-12 text-center">
            <InputField
              value={sellAmount}
              placeholder="GasSynth Amount"
              onChange={ev => setSellAmount(ev.target.value)}
            />
            {selling ? (
              <Loading type="bar" text="Selling..." />
            ) : (
              <React.Fragment>
                <p>
                  <strong>Total ETH:</strong>{" "}
                  {parseFloat(sellAmount / price, 2)}
                </p>
                <Button onClick={sell}>Sell</Button>
              </React.Fragment>
            )}
          </div>
        </div>
      </Card>

      <div className="row">
        <div className="col-md-12 text-center">
          <small>{account}</small>
        </div>
      </div>
    </React.Fragment>
  ) : (
    <Card title="Hi Stranger">
      <div className="row">
        <div className="col-md-12 text-center">
          <p>In order to transact, sign in with MetaMask.</p>
          <Loading type="bar" text="Loading..." />
        </div>
      </div>
    </Card>
  );
};

export default Account;
