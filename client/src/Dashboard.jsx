import React, { useEffect } from 'react';
import cybertruck from './assets/images/cybertruck.png';
import "./App.css";
import PercentilesBar from './components/PercentilesBar';
import CurrentPrice from './components/CurrentPrice';
import Account from './components/Account';

const Dashboard = () => {
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
                    <CurrentPrice />
                    <Account />
                </div>
            </div>
        </div>
    )
};

export default Dashboard;