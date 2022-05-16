
import '../App.css';
import MetamaskLogo from '../components/metamaskLogo.png'
import bg from '../components/bg.png'
import React, { Component, useState } from "react";
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ethers } from 'ethers'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";



export default class Setup extends Component {

    render() {

        return (
            <div style={{ 
                backgroundImage: `url(${bg})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize:"900px"

              }}>
            <Container>
                <div className="plate-holder">

                    <div className="plate-l">
                        <div style={{height:"230px"}}>
                        <img src={MetamaskLogo} display="block" height="200" />
                        </div>
                       
                        <div className="plate-title-holder">
                            <p className="plate-title-s">CONNECT METAMASK</p>
                        </div>
                    </div>
                    <div></div>
                    <div className="plate" style={{width:"350px"}}>
                  
                            <p className="plate-title-s">REFERRAL</p>
                        
                        <input id="referralIdInput" type="number" className="someclass" placeHolder="ID" style={{textAlign:"center",borderRadius:"0px", borderTop:"none",borderLeft:"none", borderRight:"none",caretColor:"black", borderBottom:"2px solid gray", width:"150px", display:"inline-block", fontSize:"35px", fontWeight:"bolder",color:"#08bd86"}}/>
                      
                    </div>
                    <div></div>
                    <button className="long-button">
                      
                        CONFIRM
                     
                        </button>
                </div>
            </Container>
            </div>
        )
    }
}
