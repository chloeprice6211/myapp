import React, { useState } from 'react'
import plateImage from './mainPlateLogo.png'
import playerCount from './playerCountImage.png'
import { ethers } from 'ethers'
import erc20abi from "../erc20ABI.json"
import coin from './whiteCoin.png'
import { ProgressBar } from 'react-bootstrap';

function change() {
  setTimeout(function () {
    var test = document.createElement('div');
    test.style.height = 150;
    test.style.backgroundColor = 'black'
    test.style.width = 300;
    test.textContent = "asdasda";
    document.getElementById('test_id').appendChild(test);
    console.log(123);
  }, 3000);
}

const Plate = () => {
  const [errorMessage, setErrorMessage] = useState(null);
  const [defaultAccount, setDefaultAccount] = useState(null);
  const [userBalance, setUserBalance] = useState(null);
  const [connButtonText, setConnButtonText] = useState('Connect Wallet');
  const isPurchased = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

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
    "8": 15
  }



  const testRender = (costValue) => {

    if (isPurchased[levels[costValue]] == 1) {
      return (
        <div className="plate green">
          <img src={coin} style={{ height: "50px" }} />
          <div style={{ height: "50px" }}>
            <p className="plate-title white">{costValue} BNB</p>
          </div>

          <p className="plate-description white">PAYMENTS: 2</p>
          <p className="plate-description white">INCOME 80% PER 1</p>


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
        <p className="plate-description">PAYMENTS: 2</p>
        <p className="plate-description">
          INCOME 80% PER 1
        </p>

        <button className="main-button" onClick={handleInput(costValue)}>BUY</button>
      </div>)
    }

  }

  const getUserLevelsInfo = async () => {
    const contractAdress = "0x08e288749baF3Ed15C13623123097aC8bb03998F";
    const userAddres = "0xB7281943d754B28F38813dc4F9c8560F06E4D0B0";
    const provider = new ethers.providers.Web3Provider(window.ethereum);

    const erc20 = new ethers.Contract(contractAdress, erc20abi, provider);
    console.log(1);
    const levelsInfo = await erc20.getUserLevels(userAddres);
    //console.log(levelsInfo[0][1]);
    //change();
  }

  const handleSubmit = async () => {
    const contractAdress = "0x08e288749baF3Ed15C13623123097aC8bb03998F";
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

  const checkWalletConnection = () => {
    window.ethereum.request({ method: 'eth_requestAccounts' })
      .then(result => {
        accountChangedHandler(result[0]);
        setConnButtonText('Wallet Connected');
        getAccountBalance(result[0]);
        //console.log(1);
      })
      .catch(error => {
        setErrorMessage(error.message);
      });

    //console.log(userBalance);
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




    if (isPurchased[id - 1] != 0 || id == 0) {
      isPurchased[id] = 1;

    
      var plate = event.target.parentNode;
      var mainTitleParagraph = document.createElement("p");
      var payoutDescription = document.createElement("p");
      var incomeDescription = document.createElement("p");
      var image = document.createElement("img");
      var progress = document.createElement("progress");
      var button = document.createElement("button");

      var prog = React.createElement(ProgressBar);

      button.className = "main-button green bg-white-button";
      button.textContent = "UPGRADE";
      button.style.backgroundColor = "white";
      button.addEventListener('click',function(event){

        var plateParent = event.target.parentNode;
        var payoutP = plateParent.querySelector("p[id=payout]");

        var numberOfPayout = parseInt(payoutP.textContent);
        numberOfPayout+=2;
        payoutP.textContent = numberOfPayout;
        
      });

      progress.max = "100";
      progress.value = "25";
      progress.style.variant = "info";

      image.src = coin;
      image.height = 50;
      image.width = 50;

      payoutDescription.textContent = parseInt(2);
      payoutDescription.className = "plate-description white";
      payoutDescription.id = 'payout'

      incomeDescription.textContent = "INCOME 80% PER 1"
      incomeDescription.className = "plate-description white";

      mainTitleParagraph.textContent = parameter + " BNB";
      mainTitleParagraph.className = "plate-title white";

      plate.innerHTML = "";
      plate.className = "plate green";

      plate.appendChild(image);
      plate.appendChild(mainTitleParagraph);
      plate.appendChild(payoutDescription)
      plate.appendChild(incomeDescription)
      plate.appendChild(progress)
      plate.appendChild(button)
      plate.appendChild(prog);

    }
    else {
  
      alert("buyprevious");
    }

  }

  getUserLevelsInfo();
  checkWalletConnection();
  handleSubmit();

  function change() {
    var test = document.createElement('div');
    test.style.height = 150;
    test.style.backgroundColor = 'black'
    test.style.width = 300;
    test.textContent = "asdasda";
    document.getElementById('test_id').appendChild(test);
  }

  return (

    <>
<div className='main-plate'>
    sometext
</div>
    </>

  )
}

export default Plate;
