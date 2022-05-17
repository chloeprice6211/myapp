import '../App.css';
import MetamaskLogo from '../components/metamaskLogo.png'
import bg from '../components/bg.png'
import React, { useState } from "react";
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ethers } from 'ethers'
import { Navigate } from 'react-router-dom'

const Setup = () => {

    const [errorMessage, setErrorMessage] = useState(null);
	const [defaultAccount, setDefaultAccount] = useState(null);
	const [userBalance, setUserBalance] = useState(null);
	const [connButtonText, setConnButtonText] = useState('Connect Wallet');
    const button = document.getElementById("confirmButton");

	const connectWalletHandler = () => {
		if (window.ethereum && window.ethereum.isMetaMask) {
			console.log('MetaMask Here!');

			window.ethereum.request({ method: 'eth_requestAccounts' })
				.then(result => {
					accountChangedHandler(result[0]);
					setConnButtonText('Wallet Connected');
					getAccountBalance(result[0]);
                    button.disabled = false;
                    button.addEventListener('click', register);
				})
				.catch(error => {
					setErrorMessage(error.message);
                    button.disabled = true;
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

    const register = () => {
        window.location.href = "/";
    }


	// listen for account changes
	window.ethereum.on('accountsChanged', accountChangedHandler);

	window.ethereum.on('chainChanged', chainChangedHandler);

    return (
        <div style={{ 
            backgroundImage: `url(${bg})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize:"900px"

          }}>
        <Container>
            <div className="plate-holder">

                <div className="plate-l" onClick={connectWalletHandler}>
                    <div style={{height:"230px"}}>
                    <img src={MetamaskLogo} display="block" height="200" />
                    </div>
                   
                    <div className="plate-title-holder">
                        <p className="plate-title-s">CONNECT METAMASK</p>
                    </div>
                </div>
                <div></div>
                <div className="plate" style={{width:"350px"}}>
              
                        <p className="plate-title-s">REFERRAL</p>
                    
                    <input id="referralIdInput" type="number" className="someclass" placeHolder="ID" style={{textAlign:"center",borderRadius:"0px", borderTop:"none",borderLeft:"none", borderRight:"none",caretColor:"black", borderBottom:"2px solid gray", width:"150px", display:"inline-block", fontSize:"35px", fontWeight:"bolder",color:"#08bd86"}}/>
                  
                </div>
                <div></div>
                <button className="long-button" id="confirmButton" onClick={register} disabled>
                    
                    CONFIRM
                 
                    </button>
            </div>
        </Container>
        </div>
    );
}

export default Setup;
