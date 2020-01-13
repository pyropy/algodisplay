import React, { useState, useEffect } from 'react'

// Components
import Bar from './Bar'
import Controls from './Controls'

// Helper functions
import bubbleSort from '../sorts'
import { generateItems } from '../helpers'

// Custom data types
import { ArrayItem } from '../types/ArrayItem'


const SortingVisualizer: React.FC = () => {
    const STARTING_ITEMS_NUM = 100;

    const tempItems: Array<ArrayItem> = []
    const [items, setItems] = useState(tempItems);

    // TODO: Add sorted function

    useEffect(() => {
        setItems(generateItems(STARTING_ITEMS_NUM));
    }, [])

    const bubbleSortHandler = () => {
        bubbleSort(items, setItems)
    }

    return (
        <div className="sorting-visualizer">
            <div className="bar-list">
                {
                    items.map((item, index) => <Bar key={index} sorted={item.sorted} current={item.current} value={item.value} />)
                }
            </div>
            <Controls startingItemsNum={STARTING_ITEMS_NUM}
                bubbleSortHandler={bubbleSortHandler}
                setItemsHandler={setItems}
            />
        </div>
    )
}

export default SortingVisualizer;
