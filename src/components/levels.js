import { render } from '@testing-library/react'
import React, { Component } from 'react'

let costs = [0.05, 0.07, 0.1, 0.14, 0.2];
let lvls = [2, 2, 2, 2, 2]
const owned = [true, true, false, false, false];

const setColors = () => {
    var mainPlate = document.getElementById("lvlPlate");

    for (var a = 0; a < mainPlate.childElementCount; a++) {
        if (owned[a]) {
            mainPlate.children[a].style.backgroundColor = 'red';
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

    levelP.textContent = 'LEVEL ' + (costs.indexOf(parameter) + 1);
    levelP.className = 'plate-description font-l';

    levelPriceP.textContent = parameter + ' BNB';
    levelPriceP.className ='plate-title';

    payoutCount.textContent = lvls[costs.indexOf(parameter)];

    upgradeButton.textContent = 'UPGRADE';
    upgradeButton.className = 'main-button';
    upgradeButton.addEventListener('click', function (event) {
        var currentLvl = lvls[costs.indexOf(parameter)];


        payoutCount.textContent = parseInt(currentLvl + 2);

        lvls[costs.indexOf(parameter)] += 2;
    })

    mainPlate.appendChild(levelP);
    mainPlate.appendChild(levelPriceP);
    mainPlate.appendChild(upgradeButton);
    mainPlate.appendChild(payoutCount);

}
const createToBuy = (parameter) => {
    var mainPlate = document.getElementById('mainPlate');
    var buyButton = document.createElement('button');
    var levelP = document.createElement('p');
    var levelPriceP = document.createElement('p');

    levelP.textContent = 'LEVEL ' + (costs.indexOf(parameter) + 1);
    levelP.className = 'plate-description font-l';


    levelPriceP.textContent = parameter + ' BNB';
    levelPriceP.className = 'plate-title';

    buyButton.textContent = 'BUY';
    buyButton.className = 'main-button';
    buyButton.addEventListener('click', function (event) {
        mainPlate.innerHTML = '';
        owned[costs.indexOf(parameter)] = true;
        createPurchased(parameter)
    })

    mainPlate.appendChild(levelP);
    mainPlate.appendChild(levelPriceP);
    mainPlate.appendChild(buyButton);
}
const onLvlClick = (parameter) => (event) => {
    setColors()
    event.target.style.backgroundColor = 'black';

    var mainPlate = document.getElementById('mainPlate');
    mainPlate.innerHTML = "";

    if (owned[costs.indexOf(parameter)]) {
        createPurchased(parameter);
    }
    else {
        createToBuy(parameter);
    }
}
window.onload = setColors;

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
                <div className='lvl-plate'  onClick={onLvlClick(0.2)}>

                    5
                </div>
                
            </div>

            <div className='main-plate' id='mainPlate'>

            </div>

</>

    );
}


export default App;