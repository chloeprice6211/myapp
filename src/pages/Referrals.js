import React, { Component } from 'react'
import Header from '../components/header'
import { Container } from 'react-bootstrap'
import { ethers } from 'ethers'
import erc20abi from "../erc20ABI.json"

var userAddres;
var referrals = 0;
var referralsPayout = 0;

const copyReferralHandler = () => {


    var copyAlert = document.getElementById("copyAlert").hidden = false;
    setTimeout(function () {
        document.getElementById("copyAlert").hidden = true;
    }, 3000);

    var text = document.getElementById("referralAddresInput").value;
    var input = document.createElement('input');
    input.setAttribute('value', text);
    document.body.appendChild(input);
    input.select();
    var result = document.execCommand('copy');
    document.body.removeChild(input);
    return result;

}

const checkWalletConnection = async () => {
    window.ethereum.request({ method: 'eth_requestAccounts' })
      .then(result => {
        console.log(result[0])
        userAddres = result[0];
        getUserId();
      })
      .catch(error => {
        console.log(error.message)
      });

  }

const getUserId = async () => {
    const contractAdress = "0x97aa930F3fD44f78Fd4256a0Ee38bA4A87D894Ce";
    const provider = new ethers.providers.Web3Provider(window.ethereum);

    const erc20 = new ethers.Contract(contractAdress, erc20abi, provider);

    const userID = await erc20.getUserIdByAddress(userAddres);

    const userInfo = await erc20.getUser(userAddres);

    referrals = userInfo[4] / Math.pow(10, 0);
    referralsPayout = userInfo[5] / Math.pow(10, 0);

    const input = document.getElementById("referralAddresInput");

    input.value = "bnbgame.fun/" + userID;

    console.log('referrals' + referrals);
    console.log('payout' + referralsPayout);
}

checkWalletConnection();

export default class Referrals extends Component {

    render() {
        return (

            <>

                <Container>



                    <div className="plate">
                        <p style={{ textAlign: "left", fontSize: "17px", fontFamily: "Calibri", fontWeight: "bolder" }}>REFERRALS COUNT</p>
                        <p id="referralCountP" style={{ textAlign: "center", fontSize: "35px", fontFamily: "Calibri", fontWeight: "bolder", color: "#11d1a4" }}>{referrals}</p>
                    </div>
                    <div className="plate">
                        <p style={{ textAlign: "left", fontSize: "17px", fontFamily: "Calibri", fontWeight: "bolder" }}>REFERRAL INCOME</p>
                        <p id="referralBNBRewardP" style={{ textAlign: "center", fontSize: "35px", fontFamily: "Calibri", fontWeight: "bolder", color: "#11d1a4", display: "inline" }}>{referralsPayout}</p>
                        <p style={{ textAlign: "center", fontSize: "35px", fontFamily: "Calibri", fontWeight: "bolder", color: "#11d1a4", display: "inline" }}> BNB</p>
                        <p></p>
                    </div>
                    <div></div>
                    <div className="plate-xl">
                        <p className="plate-title" style={{
                            marginTop: "0px",
                            textAlign: "left",
                            fontSize: "20px"
                        }}> REFERRAL PROGRAM</p>
                        <p style={{
                            color: "#525252",
                            fontFamily: "Calibri",
                            fontSize: "23px",
                            textAlign: "justify",
                            marginTop: "30px"
                        }}>
                            <div style={{ display: "flex", justifyContent: "center", height: "75px" }}>
                                <div className="lvl-div" style={{ backgroundColor: "#2daf9e" }}>
                                    1 LVL - 10%
                                </div>
                                <div className="lvl-div" style={{ backgroundColor: "#2daf9e" }}>
                                    2 LVL - 4%
                                </div>
                                <div className="lvl-div" style={{ backgroundColor: "#2daf9e" }}>
                                    3 LVL - 2%
                                </div>
                                <div className="lvl-div" style={{ backgroundColor: "#2daf9e" }}>
                                    4,5 LVLs - 1%
                                </div>
                            </div>
                            <div style={{ marginTop: "20px" }}>
                                You get <span style={{ color: "#11d1a4", fontWeight: "bolder" }}>0.015 BNB</span> per each referral sign up.
                                You also receive a reward whenever a referral under your ID purchases an item. If a referral of your referral purchase an item, that means you will get <span style={{ color: "#11d1a4", fontWeight: "bolder" }}>LVL 2</span> reward etc.
                                The duration of payments - unlimited.
                            </div>

                        </p>
                        <input id="referralAddresInput" type="text" readonly class="form-control" value="bnbgame.fun/" style={{ borderRadius: "10px", marginTop: "30px", textAlign: "center", display: "inline", width: "300px", fontSize: "20px" }} />
                        <button onClick={copyReferralHandler} className="main-button" style={{
                            marginLeft: "20px",
                            height: "45px"
                        }}>COPY</button>
                    </div>

                    <div style={{ display: "flex", justifyContent: "center", height:"50px"}}>

                        <div id="copyAlert" hidden class="alert alert-success" role="alert" style={{ width: "300px",marginTop:"20px", borderRadius:"20px", position:"absolute" }}>
                            Referral link copied to clipboard
                        </div>

                    </div>

                </Container>
            </>
        )
    }
}
