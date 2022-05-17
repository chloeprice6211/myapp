import React, { Component } from 'react'
import '../App.css';
import Plate from '../components/plate'
import { Container } from 'react-bootstrap'
import { Navigate } from 'react-router-dom'
import { useMetaMask } from "metamask-react";

const Home = () => {
  const { status, connect, account, chainId, ethereum } = useMetaMask();
    if (status === "notConnected") return <Navigate to="/setup" />

  return (
    <>

      <Container>
        <Plate />
        
        
      </Container>

    </>
  )
}

export default Home;