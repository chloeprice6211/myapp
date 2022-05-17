import React, { Component, useState } from 'react'
import plateImage from './mainPlateLogo.png'
import playerCount from './playerCountImage.png'
import plateBg from './plateBg.png'
import DonePlate from './purchasedPlate'
import { render } from '@testing-library/react'
import { ethers } from 'ethers'
import erc20abi from "../erc20ABI.json"



const Plate = () => {
  const [contractInfo, setContractInfo] = useState({
    totalUsers: "-",
    turnover: "-",
    transactions: "-"
  });
   
  const handleInput = (price) =>{
   
    console.log(price);
  }

  
  return(
    
    <div className="plate-holder">

          <div>

            <div className="plate plate-long">
              
             <img className="long-plate-image" src={plateImage} height="50" display="inline"/>
             <p className="long-plate-p">
               TOTAL INCOME
               </p>
               <p id="totalBNBIncomeP" className="long-plate-p-value" style={{display:"inline"}}>
               0
               </p>
               <p className="long-plate-p-value" style={{display:"inline"}}>
               BNB
               </p>

            </div>
           
            <div className="plate plate-long">
              
             <img className="long-plate-image" src={playerCount} height="50" display="inline"/>
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
              <br/>
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
              <br/>
              INCOME 80% PER 1
            </p>

            <button className="main-button" onClick={() => handleInput(0.07)}>BUY</button>
          </div>


          <div className="plate">
            <img src={plateImage} display="block" />
            <div className="plate-title-holder">
            <p className="plate-title">0.1 BNB</p>
            </div>
            <p className="plate-description">PAYMENTS: 2
              <br/>
              INCOME 80% PER 1
            </p>

            <button className="main-button" onClick={() => handleInput(0.1)}>BUY</button>
          </div>

          <div className="plate">
            <img src={plateImage} display="block" />
            <div className="plate-title-holder">
            <p className="plate-title">0.14 BNB</p>
            </div>
            <p className="plate-description">PAYMENTS: 2
              <br/>
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
              <br/>
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
              <br/>
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
              <br/>
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
              <br/>
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
              <br/>
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
              <br/>
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
              <br/>
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
              <br/>
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
              <br/>
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
              <br/>
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
              <br/>
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
              <br/>
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
              <br/>
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
              <br/>
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
              <br/>
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
              <br/>
              INCOME 80% PER 1
            </p>

            <button className="main-button" onClick={() => handleInput(20)}>BUY</button>
          </div>


        </div>
  )
}

export default Plate;
