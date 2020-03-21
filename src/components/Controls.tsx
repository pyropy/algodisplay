import React from 'react'

import { generateItems } from '../helpers'
import { bubbleSort } from '../algorithms/sortingAlgorithms'
import { useItems } from '../contexts/ItemContext';


const Controls: React.FC = () => {

    const { arrayItems, itemNum, setItems, setItemNum} = useItems();

    const bubbleSortHandler = () => {
        bubbleSort(arrayItems, setItems);
    }

    return (

        <React.Fragment>
            <div className="commands">
                {/* Slider for generating bars.*/}
                <input
                    type="range"
                    min={50}
                    max={100}
                    value={itemNum as number}
                    className="slider"
                    step="1"
                    id="node-slider"
                    onChange={(event) => {
                        setItemNum(Number(event.currentTarget.value))
                        setItems(generateItems(itemNum))
                    }} />
                <button className="command-button" onClick={bubbleSortHandler}>Bubble Sort</button>
            </div>
        </React.Fragment>
    )
}

export default Controls;