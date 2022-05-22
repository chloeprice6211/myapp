import { render } from '@testing-library/react'
import React, { Component } from 'react'

let items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'd'];
let itemList = [];

for (var a = 0; a < 20; a++) {
    itemList.push(<div className='lvl-plate' onClick={function (event) {
        var el = event.target;

        resetColors()
        el.style.backgroundColor = "red";
        

    }}
    >{a + 1}
    </div>)
}

const resetColors = () => {
    var parentPlate = document.getElementById("lvlPlate");

    for (var el of parentPlate.children) {
        el.style.backgroundColor = "#2dbe90"
    }
}

function App() {

    return (
        <div className='lvl-plate-holder' id='lvlPlate'>
            {itemList}
        </div>
    );
}

export default App;