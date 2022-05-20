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

	const [errorMessage, setErrorMessage] = useState(null);
	const [defaultAccount, setDefaultAccount] = useState(null);
	const [userBalance, setUserBalance] = useState(null);
	const [connButtonText, setConnButtonText] = useState('Connect Wallet');
	const { status, connect, account, chainId, ethereum } = useMetaMask();

	const disconnectWallet = () => {
        return <Navigate to="/setup" />
    }

	const connectWalletHandler = () => {
		if (window.ethereum && window.ethereum.isMetaMask) {
			console.log('MetaMask Here!');

			window.ethereum.request({ method: 'eth_requestAccounts' })
				.then(result => {
					accountChangedHandler(result[0]);
					setConnButtonText('Wallet Connected');
					getAccountBalance(result[0]);
				})
				.catch(error => {
					setErrorMessage(error.message);

				});

		} else {
			console.log('Need to install MetaMask');
			setErrorMessage('Please install MetaMask browser extension to interact');
		}
	}

	// update account, will cause component re-render
	const accountChangedHandler = (newAccount) => {
		setDefaultAccount(newAccount);
		getAccountBalance(newAccount.toString());
	}

	const getAccountBalance = (account) => {
		window.ethereum.request({ method: 'eth_getBalance', params: [account, 'latest'] })
			.then(balance => {
				setUserBalance(ethers.utils.formatEther(balance));
			})
			.catch(error => {
				setErrorMessage(error.message);
			});
	};


	const chainChangedHandler = () => {
		// reload the page to avoid any errors with chain change mid use of application
		window.location.reload();
	}


	// listen for account changes
	window.ethereum.on('accountsChanged', accountChangedHandler);

	window.ethereum.on('chainChanged', chainChangedHandler);

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
							<Nav.Link>
								<button className="button-nav" onClick={disconnectWallet}>
									SIGN OUT
								</button>
							</Nav.Link>

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
