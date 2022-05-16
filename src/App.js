import './App.css';
import Header from './components/header'
import Plate from './components/plate'
import { Container, Stack } from 'react-bootstrap'
import Setup from './pages/Setup'
import bg from './components/bg.png'
import Fotter from './components/footer'

function App() {
  return (
    <div className="App">
      <Header/>
       
       <Fotter/>
    </div>
  );
}

export default App;
