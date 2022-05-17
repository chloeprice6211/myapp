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
    var parentElement = event.target.parentNode;
    var mainEl = document.createElement("div");
    mainEl.style.height = "200";
    mainEl.style.width="200";
    mainEl.style.backgroundColor = "black";

    parentElement.after(mainEl);

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

      <div className="plate">
        <img src={plateImage} display="block" />
        <div className="plate-title-holder">
          <p className="plate-title">0.05 BNB</p>
        </div>
        <p className="plate-description">PAYMENTS: 2
          <br />
          INCOME 80% PER 1
        </p>

        <button className="main-button" id="checkButton" onClick={() => handleInput(0.05)}>BUY</button>
      </div>

      <div className="plate">
        <img src={plateImage} display="block" />
        <div className="plate-title-holder">
          <p className="plate-title">0.07 BNB</p>
        </div>
        <p className="plate-description">PAYMENTS: 2
          <br />
          INCOME 80% PER 1
        </p>

        <button value={0.07} className="main-button" onClick={handleInput(15)}>BUY</button>
      </div>


      {/* main */}
      <div className="plate">
        <img src={plateImage} display="block" />
        <div className="plate-title-holder">
          <p className="plate-title">0.1 BNB</p>
        </div>
        <p className="plate-description">PAYMENTS: 2
          <br />
          INCOME 80% PER 1
        </p>

        <button className="main-button" onClick={(e) => {
      this.handleInput(e, 15);
   }}>BUY</button>
      </div>
      {/* purchased */}
      <div collapsed className="plate green">
                    <img src={coin} style={{ height: "50px" }} />
                    <div style={{height:"50px"}}>
                    <p className="plate-title white">10 BNB</p>
                    </div>

                    <p className="plate-description white">PAYMENTS: 3<br/>
                    INCOME - 75% PER 1</p>

                    <ProgressBar animated now={45} variant="info" style={{border:"2px solid white", height:"25px", borderRadius:"20px"}} />

                    <button className="main-button green bg-white-button" style={{color:"##27c59e", backgroundColor:"white"}}>UPGRADE</button>

                </div>
      

      <div className="plate">
        <img src={plateImage} display="block" />
        <div className="plate-title-holder">
          <p className="plate-title">0.14 BNB</p>
        </div>
        <p className="plate-description">PAYMENTS: 2
          <br />
          INCOME 80% PER 1
        </p>

        <button className="main-button" onClick={() => handleInput(0.14)}>BUY</button>
      </div>

      <div className="plate">
        <img src={plateImage} display="block" />
        <div className="plate-title-holder">
          <p className="plate-title">0.2 BNB</p>
        </div>
        <p className="plate-description">PAYMENTS: 2
          <br />
          INCOME 80% PER 1
        </p>

        <button className="main-button" onClick={() => handleInput(0.2)}>BUY</button>
      </div>

      <div className="plate">
        <img src={plateImage} display="block" />
        <div className="plate-title-holder">
          <p className="plate-title">0.28 BNB</p>
        </div>
        <p className="plate-description">PAYMENTS: 2
          <br />
          INCOME 80% PER 1
        </p>

        <button className="main-button" onClick={() => handleInput(0.28)}>BUY</button>
      </div>

      <div className="plate">
        <img src={plateImage} display="block" />
        <div className="plate-title-holder">
          <p className="plate-title">0.4 BNB</p>
        </div>
        <p className="plate-description">PAYMENTS: 2
          <br />
          INCOME 80% PER 1
        </p>

        <button className="main-button" onClick={() => handleInput(0.4)}>BUY</button>
      </div>

      <div className="plate">
        <img src={plateImage} display="block" />
        <div className="plate-title-holder">
          <p className="plate-title">0.55 BNB</p>
        </div>
        <p className="plate-description">PAYMENTS: 2
          <br />
          INCOME 80% PER 1
        </p>

        <button className="main-button" onClick={() => handleInput(0.55)}>BUY</button>
      </div>

      <div className="plate">
        <img src={plateImage} display="block" />
        <div className="plate-title-holder">
          <p className="plate-title">0.8 BNB</p>
        </div>
        <p className="plate-description">PAYMENTS: 2
          <br />
          INCOME 80% PER 1
        </p>

        <button className="main-button" onClick={() => handleInput(0.8)}>BUY</button>
      </div>

      <div className="plate">
        <img src={plateImage} display="block" />
        <div className="plate-title-holder">
          <p className="plate-title">1.1 BNB</p>
        </div>
        <p className="plate-description">PAYMENTS: 2
          <br />
          INCOME 80% PER 1
        </p>

        <button className="main-button" onClick={() => handleInput(1.1)}>BUY</button>
      </div>

      <div className="plate">
        <img src={plateImage} display="block" />
        <div className="plate-title-holder">
          <p className="plate-title">1.6 BNB</p>
        </div>
        <p className="plate-description">PAYMENTS: 2
          <br />
          INCOME 80% PER 1
        </p>

        <button className="main-button" onClick={() => handleInput(1.6)}>BUY</button>
      </div>

      <div className="plate">
        <img src={plateImage} display="block" />
        <div className="plate-title-holder">
          <p className="plate-title">2.2 BNB</p>
        </div>
        <p className="plate-description">PAYMENTS: 2
          <br />
          INCOME 80% PER 1
        </p>

        <button className="main-button" onClick={() => handleInput(2.2)}>BUY</button>
      </div>

      <div className="plate">
        <img src={plateImage} display="block" />
        <div className="plate-title-holder">
          <p className="plate-title">3.2 BNB</p>
        </div>
        <p className="plate-description">PAYMENTS: 2
          <br />
          INCOME 80% PER 1
        </p>

        <button className="main-button" onClick={() => handleInput(3.2)}>BUY</button>
      </div>

      <div className="plate">
        <img src={plateImage} display="block" />
        <div className="plate-title-holder">
          <p className="plate-title">4.4 BNB</p>
        </div>
        <p className="plate-description">PAYMENTS: 2
          <br />
          INCOME 80% PER 1
        </p>

        <button className="main-button" onClick={() => handleInput(4.4)}>BUY</button>
      </div>

      <div className="plate">
        <img src={plateImage} display="block" />
        <div className="plate-title-holder">
          <p className="plate-title">6.5 BNB</p>
        </div>
        <p className="plate-description">PAYMENTS: 2
          <br />
          INCOME 80% PER 1
        </p>

        <button className="main-button" onClick={() => handleInput(6.5)}>BUY</button>
      </div>

      <div className="plate">
        <img src={plateImage} display="block" />
        <div className="plate-title-holder">
          <p className="plate-title">8 BNB</p>
        </div>
        <p className="plate-description">PAYMENTS: 2
          <br />
          INCOME 80% PER 1
        </p>

        <button className="main-button" onClick={() => handleInput(8)}>BUY</button>
      </div>

      <div className="plate">
        <img src={plateImage} display="block" />
        <div className="plate-title-holder">
          <p className="plate-title">10 BNB</p>
        </div>
        <p className="plate-description">PAYMENTS: 2
          <br />
          INCOME 80% PER 1
        </p>

        <button className="main-button" onClick={() => handleInput(10)}>BUY</button>
      </div>

      <div className="plate">
        <img src={plateImage} display="block" />
        <div className="plate-title-holder">
          <p className="plate-title">12.5 BNB</p>
        </div>
        <p className="plate-description">PAYMENTS: 2
          <br />
          INCOME 80% PER 1
        </p>

        <button className="main-button" onClick={() => handleInput(12.5)}>BUY</button>
      </div>

      <div className="plate">
        <img src={plateImage} display="block" />
        <div className="plate-title-holder">
          <p className="plate-title">16 BNB</p>
        </div>
        <p className="plate-description">PAYMENTS: 2
          <br />
          INCOME 80% PER 1
        </p>

        <button className="main-button" onClick={() => handleInput(16)}>BUY</button>
      </div>

      <div className="plate">
        <img src={plateImage} display="block" />
        <div className="plate-title-holder">
          <p className="plate-title">20 BNB</p>
        </div>
        <p className="plate-description">PAYMENTS: 2
          <br />
          INCOME 80% PER 1
        </p>

        <button className="main-button" onClick={() => handleInput(20)}>BUY</button>
      </div>


    </div>
  )
}

export default Plate;
