import { render } from '@testing-library/react'
import React, { Component } from 'react'

let costs = [0.05,0.07,0.1,0.14,0.2];
const owned = [true,true,false,false,false];

const setColors = () =>{
    var mainPlate = document.getElementById("lvlPlate");

    for(var a = 0;a<mainPlate.childElementCount;a++){
        if(owned[a]){
            mainPlate.children[a].style.backgroundColor = 'red';
        }
        else {
            mainPlate.children[a].style.backgroundColor = 'gray';
        }
    }
}
const onLvlClick = (parameter) => (event) =>{
    setColors()
    event.target.style.backgroundColor = 'black';

    var mainPlate = document.getElementById('mainPlate');
    mainPlate.textContent = parameter;

    if(owned[costs.indexOf(parameter)]){
        var upgradeButton = document.createElement('button');

        upgradeButton.textContent = 'upgrade';

        mainPlate.appendChild(upgradeButton);
    }
    else{
        var buyButton = document.createElement('button');

        buyButton.textContent = 'buy';
        buyButton.addEventListener('click',function(event){
            owned[costs.indexOf(parameter)] = true;
            event.target.parentNode.innerHTML = '';

        })
        

        mainPlate.appendChild(buyButton);
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
                <div className='lvl-plate'  onClick={onLvlClick(0.07)}>
                    2
                </div>
                <div className='lvl-plate'  onClick={onLvlClick(0.1)}>
                    3
                </div>
                <div className='lvl-plate'  onClick={onLvlClick(0.14)}>
                    4
                </div>
                <div className='lvl-plate'  onClick={onLvlClick(0.02)}>
                    5
                </div>
            </div>

            <div className='main-plate' id='mainPlate'>
                
            </div>
           

        </>
    );
}

export default App;