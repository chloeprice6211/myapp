import React, { Component } from 'react'
import plateImage from './mainPlateLogo.png'
import playerCount from './playerCountImage.png'
import plateBg from './plateBg.png'
import DonePlate from './purchasedPlate'

export default class Plate extends Component {
  render() {
    return (
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

            <button className="main-button">BUY</button>
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

            <button className="main-button">BUY</button>
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

            <button className="main-button" >BUY</button>
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

            <button className="main-button">BUY</button>
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

            <button className="main-button">BUY</button>
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

            <button className="main-button">BUY</button>
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

            <button className="main-button">BUY</button>
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

            <button className="main-button">BUY</button>
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

            <button className="main-button">BUY</button>
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

            <button className="main-button">BUY</button>
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

            <button className="main-button">BUY</button>
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

            <button className="main-button">BUY</button>
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

            <button className="main-button">BUY</button>
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

            <button className="main-button">BUY</button>
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

            <button className="main-button">BUY</button>
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

            <button className="main-button">BUY</button>
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

            <button className="main-button">BUY</button>
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

            <button className="main-button">BUY</button>
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

            <button className="main-button">BUY</button>
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

            <button className="main-button">BUY</button>
          </div>


        </div>
    )
  }
}
