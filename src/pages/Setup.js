import React, { Component } from 'react'
import '../App.css';
import { Container, Stack } from 'react-bootstrap'
import MetamaskLogo from '../components/metamaskLogo.png'

export default class Setup extends Component {

    render() {

        return (
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
                    <div className="plate-l">
                  
                            <p className="plate-title-s">REFERRAL</p>
                        
                        <input type="text" className="form-control"/>
                      
                    </div>
                    <div></div>
                    <button className="long-button">CONFIRM</button>
                </div>
            </Container>
        )
    }
}
