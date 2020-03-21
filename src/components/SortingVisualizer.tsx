import React from 'react'

// Components
import Bar from './Bar'
import Controls from './Controls'

import { useItems } from '../contexts/ItemContext'

const SortingVisualizer: React.FC = () => {

    const { arrayItems } = useItems();
    console.log(arrayItems);

    return (
        <div className="sorting-visualizer">
            <div className="bar-list">
                {
                    arrayItems.map((item, index) => <Bar key={index} sorted={item.sorted} current={item.current} value={item.value} />)
                }
            </div>
            <Controls />
        </div>
    )
}

export default SortingVisualizer;
