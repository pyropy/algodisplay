import React, { useState, useEffect } from 'react'

// Components
import Bar from './Bar'
import Controls from './Controls'

// Helper functions
import { generateItems } from '../helpers'

// Custom data types
import { ArrayItem } from '../types/ArrayItem'


const SortingVisualizer: React.FC = () => {
    const STARTING_ITEMS_NUM = 50;

    const tempItems: Array<ArrayItem> = []
    const [items, setItems] = useState(tempItems);

    useEffect(() => {
        setItems(generateItems(STARTING_ITEMS_NUM));
    }, [])

    return (
        <div className="sorting-visualizer">
            <div className="bar-list">
                {
                    items.map((item, index) => <Bar key={index} sorted={item.sorted} current={item.current} value={item.value} />)
                }
            </div>
            <Controls startingItemsNum={STARTING_ITEMS_NUM}
                items={items}
                setItemsHandler={setItems}
            />
        </div>
    )
}

export default SortingVisualizer;
