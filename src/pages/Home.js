import React, { Component, useState } from 'react'
import '../App.css';
import Plate from '../components/plate'
import { Container } from 'react-bootstrap'
import { Navigate } from 'react-router-dom'
import { useMetaMask } from "metamask-react";
import { Contract, ethers } from 'ethers';
import erc20abi from "../erc20ABI.json"

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