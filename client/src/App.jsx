import React, { useEffect } from 'react';
import getWeb3 from "./getWeb3";
import cybertruck from './assets/images/cybertruck.png';
import "./App.css";
import PercentilesBar from './components/PercentilesBar';
import Card from './components/Card';

const App = () => {

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h1>Vapor<span>Trader</span></h1>
                </div>
            </div>
            <div className="row">
                <div className="col-md-8">
                    <PercentilesBar />
                </div>
                <div className="col-md-4">
                    <Card title="Current Price">
                        <div className="row">
                            <div className="col-md-12 text-center">
                                <h1>12.13</h1>
                            </div>
                        </div>
                    </Card>
                    <Card title="Hi Stranger">
                        
                    </Card>
                    
                </div>
            </div>
        </div>
    )

};

export default App;