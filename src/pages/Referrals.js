import React, { Component } from 'react'
import Header from '../components/header'
import { Container } from 'react-bootstrap'

export default class Referrals extends Component {
    render() {
        return (

            <>
            <Container>

            
            <div className="plate">
                <p style={{textAlign:"left", fontSize:"17px", fontFamily:"Calibri", fontWeight:"bolder"}}>REFERRALS COUNT</p>
                    <p style={{textAlign:"center", fontSize:"35px", fontFamily:"Calibri", fontWeight:"bolder", color:"#11d1a4"}}>23</p>
                </div>
                <div className="plate">
                <p style={{textAlign:"left", fontSize:"17px", fontFamily:"Calibri", fontWeight:"bolder"}}>REFERRAL INCOME</p>
                    <p style={{textAlign:"center", fontSize:"35px", fontFamily:"Calibri", fontWeight:"bolder", color:"#11d1a4"}}>1.032 BNB</p>
                </div>
                <div></div>
                <div className="plate-xl">
                    <p className="plate-title" style={{
                        marginTop:"0px"
                    }}> REFERRAL PROGRAM</p>
                    <p style={{
                        color:"#525252",
                        fontFamily:"Calibri",
                        fontSize:"20px",
                        textAlign:"justify"
                    }}>
                   Get <span style={{color:"#11d1a4", fontWeight:"bolder"}}>18%</span> per referral registered under your ID. You will also be rewarded with <span style={{color:"#11d1a4", fontWeight:"bolder"}}>0.015 BNB</span> per each. Payout is made with each purshase of listings. The duration of payments - unlimited.


                    </p>
                    <input type="text" readonly class="form-control" value="some referral link" style={{borderRadius:"10px", textAlign:"center", display:"inline", width:"300px", fontSize:"20px"}}/>
                    <button className="main-button" style={{
                        marginLeft:"20px",
                        height:"45px"
                    }}>COPY</button>
                </div>
                </Container>
            </>
        )
    }
}
