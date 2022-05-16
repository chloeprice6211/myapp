import React, { Component } from 'react'
import coin from './whiteCoin.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Line, Circle } from 'rc-progress';
import { ProgressBar } from 'react-bootstrap';

export default class purchasedPlate extends Component {
    render() {
        return (
            <>
                <div className="plate green">
                    <img src={coin} style={{ height: "50px" }} />
                    <div style={{height:"50px"}}>
                    <p className="plate-title white">10 BNB</p>
                    </div>

                    <p className="plate-description white">PAYMENTS: 3<br/>
                    INCOME - 75% PER 1</p>

                    <ProgressBar animated now={45} variant="info" style={{border:"2px solid white", height:"25px", borderRadius:"20px"}} />

                    <button className="main-button green bg-white-button" style={{color:"##27c59e", backgroundColor:"white"}}>UPGRADE</button>

                </div>
            </>
        )
    }
}
