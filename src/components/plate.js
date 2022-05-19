import React, { Component, useState } from 'react'
import plateImage from './mainPlateLogo.png'
import playerCount from './playerCountImage.png'
import plateBg from './plateBg.png'
import DonePlate from './purchasedPlate'
import { render } from '@testing-library/react'
import { ethers } from 'ethers'
import erc20abi from "../erc20ABI.json"
import coin from './whiteCoin.png'
import { ProgressBar } from 'react-bootstrap';

const Plate = () => {
  const [errorMessage, setErrorMessage] = useState(null);
  const [defaultAccount, setDefaultAccount] = useState(null);
  const [userBalance, setUserBalance] = useState(null);
  const [connButtonText, setConnButtonText] = useState('Connect Wallet');
  const isPurchased = [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

  const levels = {
    "0.05": 0,
    "0.07": 1,
    "0.1": 2,
    "0.14": 3,
    "0.2": 4,
    "0.28": 5,
    "0.4": 6,
    "0.55": 7,
    "0.8": 8,
    "1,1": 9,
    "1.6": 10,
    "2,2": 11,
    "3.2": 12,
    "4.4": 13,
    "6.5": 14,
    "8": 15,
    "10": 16,
    "12.5": 17,
    "16": 18,
    "20": 19
  }



  const testRender = (costValue) => {

    if (isPurchased[levels[costValue]] == 1) {
      return (
      <div className="plate green">
        <img src={coin} style={{ height: "50px" }} />
        <div style={{ height: "50px" }}>
          <p className="plate-title white">{costValue} BNB</p>
        </div>

        <p className="plate-description white">PAYMENTS: 3<br />
          INCOME - 75% PER 1</p>

        <ProgressBar animated now={45} variant="info" style={{ border: "2px solid white", height: "25px", borderRadius: "20px" }} />

        <button className="main-button green bg-white-button" style={{ color: "##27c59e", backgroundColor: "white" }}>UPGRADE</button>

      </div>)
    }
    else {
      return (<div className="plate">
        <img src={plateImage} display="block" />
        <div className="plate-title-holder">
          <p className="plate-title">{costValue} BNB</p>
        </div>
        <p className="plate-description">PAYMENTS: 2
          <br />
          INCOME 80% PER 1
        </p>

        <button className="main-button" onClick={handleInput(costValue)}>BUY</button>
      </div>)
    }

  }



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
  }

  const checkWalletConnection = () => {
    window.ethereum.request({ method: 'eth_requestAccounts' })
      .then(result => {
        accountChangedHandler(result[0]);
        setConnButtonText('Wallet Connected');
        getAccountBalance(result[0]);
      })
      .catch(error => {
        setErrorMessage(error.message);
      });

    console.log(userBalance);
  }

  const accountChangedHandler = (newAccount) => {
    setDefaultAccount(newAccount);
    getAccountBalance(newAccount.toString());
  }

  const getAccountBalance = (account) => {
    window.ethereum.request({ method: 'eth_getBalance', params: [account, 'latest'] })
      .then(balance => {
        setUserBalance(ethers.utils.formatEther(balance));
      })
      .catch(error => {
        setErrorMessage(error.message);
      });
  };

  const handleInput = (parameter) => (event) => {
    var id = levels[parameter]

 


    if(isPurchased[id-1]!=0 || id == 0){
      isPurchased[id] = 1;

      alert("purchased")

    }
    else{
      alert("buyprevious")
    }
  
  }

  window.onload = checkWalletConnection();
  window.onload = handleSubmit();

  return (

    <div className="plate-holder">

      <div>

        <div className="plate plate-long">

          <img className="long-plate-image" src={plateImage} height="50" display="inline" />
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

      {
        testRender(0.05)
      }

      {
        testRender(0.07)
      }

      {
        testRender(0.1)
      }

      {
        testRender(0.14)
      }

      {
        testRender(0.2)
      }

      {
        testRender(0.28)
      }

      {
        testRender(0.4)
      }

      {
        testRender(0.55)
      }

      {
        testRender(0.8)
      }

      {
        testRender(1.1)
      }

      {
        testRender(1.6)
      }

      {
        testRender(2.2)
      }

      {
        testRender(3.2)
      }

      {
        testRender(4.4)
      }

      {
        testRender(6.5)
      }

      {
        testRender(8)
      }
      {
        testRender(10)
      }
      {
        testRender(12.5)
      }
      {
        testRender(16)
      }
      {
        testRender(20)
      }



    </div>
  )
}

export default Plate;
