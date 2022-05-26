import { render } from '@testing-library/react'
import React, { Component } from 'react'
import { ProgressBar } from 'react-bootstrap'
import { ethers } from 'ethers'
import erc20abi from "../erc20ABI.json"

let costs = [0.05, 0.07, 0.1, 0.14, 0.2, 0.28, 0.4, 0.55, 0.8, 1.1, 1.6, 2.2, 3.2, 4.4, 6.5, 8];
let lvls = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
let maxPayouts = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
const owned = [true, true, false, false, false, false, false, false, false, false, false, false, false, false, false, false];
let queue = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let maxQueue = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let userAddres = '';

const getUserAddres = () => {
    window.ethereum.request({ method: 'eth_requestAccounts' })
      .then(result => {
        console.log(result);
        userAddres = result[0];
        console.log('useraddres = ' + userAddres);
      })
}

getUserAddres();

const getLevelQueue = async () => {

    const contractAdress = "0x97aa930F3fD44f78Fd4256a0Ee38bA4A87D894Ce";
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    
    const erc20 = new ethers.Contract(contractAdress, erc20abi, provider);
    const levelsInfo = await erc20.getUserLevels(userAddres);

    for (var i = 0; i < costs.length; i++) {
        const queueInfo = await erc20.getPlaceInQueue(userAddres, i + 1);
        var a = queueInfo[0] / Math.pow(10, 0);
        var b = queueInfo[1] / Math.pow(10, 0);
        queue[i] = a;
        maxQueue[i] = b;

        owned[i] = levelsInfo[0][i + 1];
        lvls[i] = levelsInfo[1][i + 1];
        maxPayouts[i] = levelsInfo[2][i + 1];
    }

    await console.log(levelsInfo);

    setColors();

}

getLevelQueue();

const setColors = () => {
    var mainPlate = document.getElementById("lvlPlate");

    for (var a = 0; a < mainPlate.childElementCount; a++) {
        if (owned[a]) {
            mainPlate.children[a].style.backgroundColor = '#33c496';
        }
        else {
            mainPlate.children[a].style.backgroundColor = 'gray';
        }
    }
}

const createPurchased = (parameter) => {
    var mainPlate = document.getElementById('mainPlate');
    var upgradeButton = document.createElement('button');
    var payoutCount = document.createElement('p');
    var levelP = document.createElement('p');
    var levelPriceP = document.createElement('p');
    var testDiv = document.createElement('div');
    var holder = document.createElement('div');
    var progress = document.createElement('div');
    var progressP = document.createElement('div');
    var profitInfoP = document.createElement('p');

    profitInfoP.textContent = 'PROFIT 75% PER PAYOUT';
    profitInfoP.className = 'plate-description';
    profitInfoP.style.color = '#12ac85';

    holder.style.justifyContent = 'center';
    holder.style.display = 'flex';

    progress.className = 'progress';
    progressP.className = 'progress-bar progress-bar-striped progress-bar-animated bg-success'
    progressP.role = 'progressbar'

    const a = queue[costs.indexOf(parameter)];
    const b = maxQueue[costs.indexOf(parameter)];

    progressP.style.width = ((b - a) / b) * 100 + "%";
    progress.style.height = "40px";
    progress.style.opacity = '0.8'
    progress.style.width = "100%";
    progress.style.borderRadius = "30px";
    progressP.ariaValueMax = "100";
    progressP.ariaValueMin = "0";
    progressP.ariaValueNow = '40';
    progress.ariaValueNow = '25';
    progress.appendChild(progressP);

    holder.appendChild(progress);

    testDiv.innerHTML = <progress value={25} /> + 'aaaa';
    levelP.textContent = 'LEVEL ' + (costs.indexOf(parameter) + 1);
    levelP.className = 'plate-description font-l';

    levelPriceP.textContent = parameter + ' BNB';
    levelPriceP.className = 'plate-title';

    payoutCount.textContent = lvls[costs.indexOf(parameter)] + '  OF  ' + maxPayouts[costs.indexOf(parameter)] + '  PAYOUTS';
    payoutCount.className = 'plate-description font-m';

    upgradeButton.textContent = 'UPGRADE';
    upgradeButton.className = 'main-button';
    upgradeButton.style.marginTop = '30px';
    upgradeButton.addEventListener('click', function (event) {
        var currentLvl = lvls[costs.indexOf(parameter)];


        payoutCount.textContent = lvls[costs.indexOf(parameter)] + ' OF '+ maxPayouts[costs.indexOf(parameter)] + ' PAYOUTS';


        lvls[costs.indexOf(parameter)] += 2;
    })

    mainPlate.appendChild(levelP);
    mainPlate.appendChild(levelPriceP);
    mainPlate.appendChild(payoutCount);
    mainPlate.appendChild(profitInfoP);
    mainPlate.appendChild(holder);
    mainPlate.appendChild(upgradeButton);




}
const createToBuy = (parameter) => {
    var mainPlate = document.getElementById('mainPlate');
    var buyButton = document.createElement('button');
    var levelP = document.createElement('p');
    var levelPriceP = document.createElement('p');
    var profitInfoP = document.createElement('p');

    profitInfoP.textContent = 'PROFIT 75% PER PAYOUT';
    profitInfoP.className= 'plate-description';
    profitInfoP.style.color ='#21a572';

    levelP.textContent = 'LEVEL ' + (costs.indexOf(parameter) + 1);
    levelP.className = 'plate-description font-l';


    levelPriceP.textContent = parameter + ' BNB';
    levelPriceP.className = 'plate-title';

    buyButton.textContent = 'BUY';
    buyButton.className = 'main-button';
    buyButton.style.marginTop = "110px";
    buyButton.addEventListener('click', function (event) {

        if (owned[costs.indexOf(parameter) - 1]) {
            mainPlate.innerHTML = '';
            owned[costs.indexOf(parameter)] = true;
            createPurchased(parameter)
        }
        else {
            alert('buy previous');
        }

    })

    mainPlate.appendChild(levelP);
    mainPlate.appendChild(levelPriceP);
    mainPlate.appendChild(profitInfoP);
    mainPlate.appendChild(buyButton);
    
}
const onLvlClick = (parameter) => (event) => {
    setColors()
    event.target.style.backgroundColor = "#29a77f";

    var mainPlate = document.getElementById('mainPlate');
    mainPlate.innerHTML = "";

    if (owned[costs.indexOf(parameter)]) {
        createPurchased(parameter);
    }
    else {
        createToBuy(parameter);
    }
}

function App() {

    return (
        <>

            <div className='lvl-plate-holder' id='lvlPlate'>

                <div className='lvl-plate' onClick={onLvlClick(0.05)}>
                    1
                </div>
                <div className='lvl-plate' onClick={onLvlClick(0.07)}>
                    2
                </div>
                <div className='lvl-plate' onClick={onLvlClick(0.1)}>
                    3
                </div>
                <div className='lvl-plate' onClick={onLvlClick(0.14)}>
                    4
                </div>
                <div className='lvl-plate' onClick={onLvlClick(0.2)}>

                    5
                </div>
                <div className='lvl-plate' onClick={onLvlClick(0.28)}>

                    6
                </div>
                <div className='lvl-plate' onClick={onLvlClick(0.4)}>
                    7
                </div>
                <div className='lvl-plate' onClick={onLvlClick(0.55)}>

                    8
                </div>
                <div className='lvl-plate' onClick={onLvlClick(0.8)}>

                    9
                </div>
                <div className='lvl-plate' onClick={onLvlClick(1.1)}>

                    10
                </div>
                <div className='lvl-plate' onClick={onLvlClick(1.6)}>

                    11
                </div>
                <div className='lvl-plate' onClick={onLvlClick(2.2)}>

                    12
                </div>
                <div className='lvl-plate' onClick={onLvlClick(3.2)}>

                    13
                </div>
                <div className='lvl-plate' onClick={onLvlClick(4.4)}>

                    14
                </div>
                <div className='lvl-plate' onClick={onLvlClick(6.5)}>

                    15
                </div>
                <div className='lvl-plate' onClick={onLvlClick(8)}>

                    16
                </div>

            </div>

            <div className='main-plate' id='mainPlate'>
                <p style={{ lineHeight: '250px' }} className='plate-description font-m'>SELECT A LVL</p>
            </div>

        </>

    );
}


export default App;