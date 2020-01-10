import React, { useState } from 'react'

import {generateNodes} from '../helpers'

type ControlsProps = {
    bubbleSortHandler: Function,
    setNodesHandler: Function,
    startingNodes: number
}

const Controls: React.FC<ControlsProps> = ({ bubbleSortHandler, setNodesHandler, startingNodes}) => {

    const [nodeNum, setNodeNum] = useState(startingNodes);

    return (
        <React.Fragment>
            <div className="commands">
                {/* Slider for generating bars.*/}
                <input
                    type="range"
                    min={startingNodes}
                    max="200"
                    value={nodeNum}
                    className="slider"
                    step="1"
                    id="myRange"
                    onChange={(event) => {
                        setNodeNum(Number(event.target.value))
                        setNodesHandler(generateNodes(nodeNum))
                    }} />
                <button onClick={() => bubbleSortHandler()}>Bubble Sort</button>
            </div>
        </React.Fragment>
    )
}

export default Controls;