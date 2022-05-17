import './App.css';
import Header from './components/header'
import Plate from './components/plate'
import { Container, Stack } from 'react-bootstrap'
import Setup from './pages/Setup'
import bg from './components/bg.png'
import Fotter from './components/footer'
import DonePlate from './components/purchasedPlate'
import { ethers } from 'ethers'
import { Redirect } from "react-router"

function App() {
  return (
    <div className="App">
      <Header/>
      
      <Fotter/>
    </div>
  );
}

export default App;
