import React, { useState, useEffect } from "react";
import getWeb3 from "../../getWeb3";
import Card from "../Card";
import Button from "../Button";
import InputField from "../InputField";

const Account = ({ price }) => {
  const [account, setAccount] = useState(null);
  const [amount, setAmount] = useState("");

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

  const startTransaction = () => {
    console.log(amount);
    alert("Start it.");
  };

  useEffect(() => {
    console.log("one time.");
    getAccount();
  }, []);

  return (
    <Card title={account ? "Mint Tokens" : "Hi Stranger"}>
      {account ? (
        <div className="row">
          <div className="col-md-12 text-center">
            <InputField
              value={amount}
              placeholder="100"
              onChange={ev => setAmount(ev.target.value)}
            />
            <strong>Total:</strong> {parseFloat(amount * price, 2)}
            <Button onClick={startTransaction}>Start Transaction</Button>
          </div>
        </div>
      ) : (
        <div className="row">
          <div className="col-md-12 text-center">
            <p>In order to transact, sign in with MetaMask.</p>
            <Button onClick={getAccount}>Launch MetaMask</Button>
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
