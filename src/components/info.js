import React, { Component } from 'react'
import mainPlateLogo from './mainPlateLogo.png'
import playerCount from './playerCountImage.png'

export default class info extends Component {
    render() {
        return (
            <div className="plate-holder">
                <div id='test_id'>

                    <div className="plate plate-long">
                        <img className="long-plate-image" src={mainPlateLogo} height="50" display="inline" />
                        <p className="long-plate-p">
                            TOTAL INCOME
                        </p>
                        <p id="totalBNBIncomeP" className="long-plate-p-value" style={{ display: "inline" }}>
                            0
                        </p>
                        <p className="long-plate-p-value" style={{ display: "inline" }}>
                            BNB
                        </p>

                    </div>


                    <div className="plate plate-long">

                        <img className="long-plate-image" src={playerCount} height="50" display="inline" />
                        <p className="long-plate-p">
                            PLAYER COUNT
                        </p>
                        <p id="totalPlayerCountP" className="long-plate-p-value">
                            0
                        </p>

                    </div>

                </div>
            </div>
        )
    }
}
