import React, { useState } from 'react'

import {generateItems} from '../helpers'
import { bubbleSort } from '../sorts'
import { ArrayItem } from '../types/ArrayItem';

type ControlsProps = {
    items: Array<ArrayItem>,
    setItemsHandler: Function,
    startingItemsNum: number
}

const Controls: React.FC<ControlsProps> = ({ items, setItemsHandler, startingItemsNum}) => {

    const [itemNum, setNodeNum] = useState(startingItemsNum);

    const bubbleSortHandler = () => {
        bubbleSort(items, setItemsHandler)
    }

    return (
        <React.Fragment>
            <div className="commands">
                {/* Slider for generating bars.*/}
                <input
                    type="range"
                    min={startingItemsNum}
                    max="100"
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