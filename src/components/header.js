import React, { Component, useState } from "react";
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import logo from './mainHeaderLogo.png'
import telegram from './telegram.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import { ethers } from 'ethers'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Setup from '../pages/Setup'
import Home from '../pages/Home'
import Referrals from '../pages/Referrals'
import { Stack } from "react-bootstrap";
import { Navigate } from 'react-router-dom'
import { useMetaMask } from "metamask-react";

const Header = () => {

	const [userBalance, setUserBalance] = useState(null);
	const [userAddres, setUserAddres] = useState(null);

	const a = () => {
		if (window.ethereum && window.ethereum.isMetaMask) {
			console.log('MetaMask Here!');
	
			window.ethereum.request({ method: 'eth_requestAccounts' })
				.then(result => {
					getAccountBalance(result[0]);
					setUserAddres(result[0]);
				})
		}
	}
	
	a();
	
	const getAccountBalance = (account) => {
		window.ethereum.request({ method: 'eth_getBalance', params: [account, 'latest'] })
			.then(balance => {
				setUserBalance(ethers.utils.formatEther(balance));
			})
	};

	return (
		<>
			<Navbar collapseOnSelect expand="md" bg="white" variant="white">

				<Container>



					<Navbar.Brand href="/">
						<img
							src={logo}
							height="75"
							className="d-inline-block align-top"
							alt="BNBgame"
						/>
					</Navbar.Brand>

					<Navbar.Toggle aria-controls="responsive-navbar-nav" />

					<Navbar.Collapse id="responsive-navbar-nav">
						<Nav className="mr-auto">

							<Nav.Link href="/" style={{lineHeight:"80px"}}>GAME</Nav.Link>
							<Nav.Link href="/referrals" style={{lineHeight:"80px"}}>REFERRALS</Nav.Link>
							<Nav.Link href="/setup" style={{lineHeight:"80px"}}>SUPPORT</Nav.Link>
							<Nav.Link href="/setup" style={{lineHeight:"50px"}}>
							<img src={telegram} style={{
								height:"60px",
								marginTop:"10px"
							}} />
							</Nav.Link>


						</Nav>
					</Navbar.Collapse>

					<Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
						<Nav className="ml-auto">
						        <p className="plate-title font-m">
									BALANCE: {Number(userBalance).toFixed(5)}
								</p>

						</Nav>
					</Navbar.Collapse>

				</Container>
			</Navbar>

			<Router>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/setup' element={<Setup />} />
					<Route path='/referrals' element={<Referrals />} />
				</Routes>
			</Router>

			
		</>
	)
}

export default Header;
