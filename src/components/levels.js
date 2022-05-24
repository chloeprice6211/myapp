import { render } from '@testing-library/react'
import React, { Component } from 'react'

let costs = [0.05, 0.07, 0.1, 0.14, 0.02];
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
    mainPlate.textContent = parameter;


    var upgradeButton = document.createElement('button');
    var lvlP = document.createElement('p');
    lvlP.textContent = lvls[costs.indexOf(parameter)];

    upgradeButton.textContent = 'upgrade';
    upgradeButton.addEventListener('click', function (event) {
        var currentLvl = lvls[costs.indexOf(parameter)];


        lvlP.textContent = parseInt(currentLvl + 2);

        lvls[costs.indexOf(parameter)] += 2;
    })

    mainPlate.appendChild(upgradeButton);
    mainPlate.appendChild(lvlP);

}
const createToBuy = (parameter) => {
    var mainPlate = document.getElementById('mainPlate');
    mainPlate.textContent = parameter;

    var buyButton = document.createElement('button');

    buyButton.textContent = 'buy';
    buyButton.addEventListener('click', function (event) {
        owned[costs.indexOf(parameter)] = true;
        createPurchased(parameter)
    })

    mainPlate.appendChild(buyButton);
}
const onLvlClick = (parameter) => (event) => {
    setColors()
    event.target.style.backgroundColor = 'black';

    var mainPlate = document.getElementById('mainPlate');
    mainPlate.textContent = parameter;

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
                <div className='lvl-plate' onClick={onLvlClick(0.02)}>
                    5
                </div>
            </div>

            <div className='main-plate' id='mainPlate'>

            </div>


        </>
    );
}

export default App;