import React, { useState, useEffect } from 'react'

// Components
import Bar from './Bar'
import Controls from './Controls'

// Helper functions
import bubbleSort from '../sorts'
import { generateNodes } from '../helpers'

// Custom data types
import { ArrayNode } from '../types/ArrayNode'


const SortingVisualizer: React.FC = () => {
    const STARTING_NODES = 100;

    const tempNodes: Array<ArrayNode> = []
    const [nodes, setNodes] = useState(tempNodes);

    // TODO: Add sorted function

    useEffect(() => {
        setNodes(generateNodes(STARTING_NODES));
    }, [])

    const bubbleSortHandler = () => {
        let i = 0;
        for (let partialResult of bubbleSort(nodes)) {
            i++;
            let sorted = [...partialResult.values()]
            setTimeout(() => {
                setNodes(sorted);
            }, i * 0.1)
        }
    }

    return (
        <div className="sorting-visualizer">
            <div className="bar-list">
                {
                    nodes.map((node, index) => <Bar key={index} sorted={node.sorted} current={node.current} value={node.value} />)
                }
            </div>
            <Controls startingNodes={STARTING_NODES}
                bubbleSortHandler={bubbleSortHandler}
                setNodesHandler={setNodes}
            />
        </div>
    )
}

export default SortingVisualizer;
