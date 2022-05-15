import React, { Component } from 'react'
import '../App.css';
import Plate from '../components/plate'
import { Container } from 'react-bootstrap'


export default class Home extends Component {
    
  render() {
    return (
      <>
     
       <Container>
        <Plate/>

      </Container>

      </>
    )
  }
}
