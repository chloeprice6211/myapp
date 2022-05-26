import '../App.css';
import MetamaskLogo from '../components/metamaskLogo.png'
import bg from '../components/bg.png'
import React, { useState } from "react";
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ethers } from 'ethers'
import { Navigate } from 'react-router-dom'
import erc20abi from "../erc20ABI.json"
import globalConst from '../GlobalVar';

var contractAdress;
var provider;
var erc20;
var isConnected = false;
var user;
var referrerAddres;

const options = {
	gasLimit: 21000000,
	gasPrice: 8000000000
};

const Setup = () => {

	const [errorMessage, setErrorMessage] = useState(null);
	const [defaultAccount, setDefaultAccount] = useState(null);
	const [userBalance, setUserBalance] = useState(null);
	const [connButtonText, setConnButtonText] = useState('Connect Wallet');
	const button = document.getElementById("confirmButton");

	const connectWalletHandler = () => {

		contractAdress = "0x08e288749baF3Ed15C13623123097aC8bb03998F";
		provider = new ethers.providers.Web3Provider(window.ethereum);

		erc20 = new ethers.Contract(contractAdress, erc20abi, provider);

		if (window.ethereum && window.ethereum.isMetaMask) {
			console.log('MetaMask Here!');

			window.ethereum.request({ method: 'eth_requestAccounts' })
				.then(result => {
					accountChangedHandler(result[0]);
					setConnButtonText('Wallet Connected');
					getAccountBalance(result[0]);
					button.addEventListener('click', registerUser);
					user = result[0];
					console.log('useruser' + user);
					isConnected = true;
					checkIfRegistered();
				})
				.catch(error => {
					setErrorMessage(error.message);
				});

		} else {
			console.log('Need to install MetaMask');
			setErrorMessage('Please install MetaMask browser extension to interact');
		}
	}

	const checkIfRegistered = async () => {
		const isRegistered = await erc20.isUserRegistered(user);
		if (isRegistered) window.location.href = "/";
	}

	connectWalletHandler();

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

	const registerUser = async () => {
		var inputField = document.getElementById("referralIdInput");
		const inputValue = Number(inputField.value);
		const temp = await erc20.getGlobalStatistic();
		const maxUsers = await temp[0] / Math.pow(10, 0);

		let overrides = {
			value: ethers.utils.parseEther("1.0")     // ether in this case MUST be a string
		};

		const pprovider = new ethers.providers.Web3Provider(window.ethereum);
		await pprovider.send("eth_requestAccounts", []);
		const ssigner = await pprovider.getSigner();
		const eerc20 = new ethers.Contract(contractAdress, erc20abi, ssigner);

		console.log("123123" + globalConst);
	}


	// listen for account changes
	window.ethereum.on('accountsChanged', accountChangedHandler);

	window.ethereum.on('chainChanged', chainChangedHandler);

	return (
		<div style={{
			backgroundImage: `url(${bg})`,
			backgroundRepeat: 'no-repeat',
			backgroundSize: "900px"

		}}>
			<Container>
				<div className="plate-holder">

					<div className="plate-l" onClick={connectWalletHandler}>
						<div style={{ height: "230px" }}>
							<img src={MetamaskLogo} display="block" height="200" />
						</div>

						<div className="plate-title-holder">
							<p className="plate-title-s">CONNECT METAMASK</p>
						</div>
					</div>
					<div></div>
					<div className="plate" style={{ width: "350px" }}>

						<p className="plate-title-s">REFERRAL</p>

						<input id="referralIdInput" type="number" className="someclass" placeHolder="ID" style={{ textAlign: "center", borderRadius: "0px", borderTop: "none", borderLeft: "none", borderRight: "none", caretColor: "black", borderBottom: "2px solid gray", width: "150px", display: "inline-block", fontSize: "35px", fontWeight: "bolder", color: "#08bd86" }} />

					</div>
					<div></div>
					<button className="long-button" id="confirmButton" onClick={registerUser}>

						CONFIRM

					</button>
				</div>
			</Container>
		</div>
	);
}

export default Setup;
