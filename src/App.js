import './App.css';
import Header from './components/header'
import Plate from './components/plate'
import { Container } from 'react-bootstrap'

function App() {
  return (
    <div className="App">
      <Header />

      <Container>
        <Plate/>

      </Container>



    </div>
  );
}

export default App;
