import React, { Component } from 'react'
import mainPlateLogo from './mainPlateLogo.png'
import playerCount from './playerCountImage.png'
import { ethers } from 'ethers'
import erc20abi from "../erc20ABI.json"

const handleSubmit = async () => {
    const contractAdress = "0x97aa930F3fD44f78Fd4256a0Ee38bA4A87D894Ce";
    const provider = new ethers.providers.Web3Provider(window.ethereum);

    const erc20 = new ethers.Contract(contractAdress, erc20abi, provider);

    const globalstatistics = await erc20.getGlobalStatistic();
    var usersCount = globalstatistics[0] / Math.pow(10, 0);
    var turnover = globalstatistics[2] / Math.pow(10, 18);
    const usersText = document.getElementById("totalPlayerCountP");
    usersText.textContent = usersCount;
    const turnoverText = document.getElementById("totalBNBIncomeP");
    turnoverText.textContent = turnover;
    console.log(usersCount);
    console.log(turnover);
  }

  handleSubmit();

  const checkWalletConnection = () => {
    window.ethereum.request({ method: 'eth_requestAccounts' })
      .then(result => {
        //console.log(result[0])
      })
      .catch(error => {
        console.log(error.message)
      });

  }

  checkWalletConnection();

export default class info extends Component {
    render() {
        return (
            <div className="plate-holder">
                <div id='test_id'>

                    <div className="plate plate-long">
                        <img className="long-plate-image" src={mainPlateLogo} height="50" display="inline" />
                        <p className="long-plate-p">
                            TOTAL INCOME
                        </p>
                        <p id="totalBNBIncomeP" className="long-plate-p-value" style={{ display: "inline" }}>
                            0
                        </p>
                        <p className="long-plate-p-value" style={{ display: "inline" }}>
                            BNB
                        </p>

                    </div>


                    <div className="plate plate-long">

                        <img className="long-plate-image" src={playerCount} height="50" display="inline" />
                        <p className="long-plate-p">
                            PLAYER COUNT
                        </p>
                        <p id="totalPlayerCountP" className="long-plate-p-value">
                            0
                        </p>

                    </div>

                </div>
            </div>
        )
    }
}
