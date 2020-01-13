import React, { useState } from 'react'

import {generateItems} from '../helpers'

type ControlsProps = {
    bubbleSortHandler: Function,
    setItemsHandler: Function,
    startingItemsNum: number
}

const Controls: React.FC<ControlsProps> = ({ bubbleSortHandler, setItemsHandler, startingItemsNum}) => {

    const [itemNum, setNodeNum] = useState(startingItemsNum);

    return (
        <React.Fragment>
            <div className="commands">
                {/* Slider for generating bars.*/}
                <input
                    type="range"
                    min={startingItemsNum}
                    max="200"
                    value={itemNum}
                    className="slider"
                    step="1"
                    id="node-slider"
                    onChange={(event) => {
                        setNodeNum(Number(event.target.value))
                        setItemsHandler(generateItems(itemNum))
                    }} />
                <button className="command-button" onClick={() => bubbleSortHandler()}>Bubble Sort</button>
            </div>
        </React.Fragment>
    )
}

export default Controls;