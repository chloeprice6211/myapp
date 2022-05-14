import './App.css';
import Header from './components/header'
import Plate from './components/plate'
import { Container } from 'react-bootstrap'
import plateImage from './components/mainPlateLogo.png'
import playerCount from './components/playerCountImage.png'
import plateBg from './components/plateBg.png'



function App() {
  return (
    <div className="App">
      <Header />

      <Container>
        <div className="plate-holder">

          <div>

            <div className="plate plate-long">
              
             <img className="long-plate-image" src={plateImage} height="50" display="inline"/>
             <p className="long-plate-p">
               TOTAL PROFIT
               </p>
               <p className="long-plate-p-value">
               $142,944
               </p>

            </div>
           
            <div className="plate plate-long">
              
             <img className="long-plate-image" src={playerCount} height="50" display="inline"/>
             <p className="long-plate-p">
               PLAYER COUNT
               </p>
               <p className="long-plate-p-value">
               10,283
               </p>

            </div>

          </div>

          <div className="plate">
            <img src={plateImage} display="block" />
            <p className="plate-title">10 BNB</p>
            <p className="plate-description">PAYMENTS: 3
              <br/>
              PROFIT 75% PER 1
            </p>

            <button className="main-button">BUY</button>
          </div>

          <div className="plate">
            <img src={plateImage} display="block" />
            <p className="plate-title">10 BNB</p>
            <p className="plate-description">PAYMENTS: 3
              <br/>
              PROFIT 75% PER 1
            </p>

            <button className="main-button">BUY</button>
          </div>

          <div className="plate">
            <img src={plateImage} display="block" />
            <p className="plate-title">10 BNB</p>
            <p className="plate-description">PAYMENTS: 3
              <br/>
              PROFIT 75% PER 1
            </p>

            <button className="main-button">BUY</button>
          </div>

          <div className="plate">
            <img src={plateImage} display="block" />
            <p className="plate-title">10 BNB</p>
            <p className="plate-description">PAYMENTS: 3
              <br/>
              PROFIT 75% PER 1
            </p>

            <button className="main-button">BUY</button>
          </div>

          <div className="plate">
            <img src={plateImage} display="block" />
            <p className="plate-title">10 BNB</p>
            <p className="plate-description">PAYMENTS: 3
              <br/>
              PROFIT 75% PER 1
            </p>

            <button className="main-button">BUY</button>
          </div>

          <div className="plate">
            <img src={plateImage} display="block" />
            <p className="plate-title">10 BNB</p>
            <p className="plate-description">PAYMENTS: 3
              <br/>
              PROFIT 75% PER 1
            </p>

            <button className="main-button">BUY</button>
          </div>

          <div className="plate">
            <img src={plateImage} display="block" />
            <p className="plate-title">10 BNB</p>
            <p className="plate-description">PAYMENTS: 3
              <br/>
              PROFIT 75% PER 1
            </p>

            <button className="main-button">BUY</button>
          </div>

          <div className="plate">
            <img src={plateImage} display="block" />
            <p className="plate-title">10 BNB</p>
            <p className="plate-description">PAYMENTS: 3
              <br/>
              PROFIT 75% PER 1
            </p>

            <button className="main-button">BUY</button>
          </div>


        </div>

      </Container>



    </div>
  );
}

export default App;
