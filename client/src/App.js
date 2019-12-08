import React from "react";
import styled from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
// import getWeb3 from "./getWeb3";
// import Interface from "./Interface";
import "./App.css";
// import { drizzleReactHooks } from 'drizzle-react';
import Header from './components/Layout/Header';
import Sidebar from './components/Layout/Sidebar';
import Pages from './Pages';
import globe from './assets/images/globe.gif';

const GlobeImg = styled.img`
margin: 0px auto;
`;

const App = () => {
  
  return (
    <div className="container">
        <BrowserRouter>
          <Header />
          <div className="row">
            <div className="col-md-12">
              <hr />
            </div>
            <div className="col-md-8">
              <Pages />
            </div>
            <Sidebar />
          </div>
          <div className="row text-center">
            <GlobeImg src={globe}/>
          </div>
        </BrowserRouter>
      </div>
  )

}
/*
class App extends Component {
  // state = { storageValue: 0, web3: null, accounts: null, contract: null };

  // componentDidMount = async () => {
    // try {
  //     // Get network provider and web3 instance.
      // const web3 = await getWeb3();

  //     // Use web3 to get the user's accounts.
  //     const accounts = await web3.eth.getAccounts();

  //     // Get the contract instance.
  //     const networkId = await web3.eth.net.getId();
  //     const deployedNetwork = SimpleStorageContract.networks[networkId];
  //     const instance = new web3.eth.Contract(
  //       SimpleStorageContract.abi,
  //       deployedNetwork && deployedNetwork.address,
  //     );

  //     // Set web3, accounts, and contract to the state, and then proceed with an
  //     // example of interacting with the contract's methods.
      // this.setState({ web3 });
    // } catch (error) {
  //     // Catch any errors for any of the above operations.
  //     alert(
  //       `Failed to load web3, accounts, or contract. Check console for details.`,
  //     );
  //     console.error(error);
    // }
  // };

  // runExample = async () => {
  //   const { accounts, contract } = this.state;

  //   // Stores a given value, 5 by default.
  //   await contract.methods.set(5).send({ from: accounts[0] });

  //   // Get the value from the contract to prove it worked.
  //   const response = await contract.methods.get().call();

  //   // Update state with the result.
  //   this.setState({ storageValue: response });
  // };

  render() {
    // if (!this.state.web3) {
    //   return <div>Loading Web3, accounts, and contract...</div>;
    // }
    return (
      <div className="container">
        <BrowserRouter>
          <Header />
          <div className="row">
            <div className="col-md-12">
              <hr />
            </div>
            <div className="col-md-8">
              <Pages />
            </div>
            <Sidebar />
          </div>
          <div className="row text-center">
            <GlobeImg src={globe}/>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
*/

export default App;