import { ArrayItem } from './types/ArrayItem'

export const generateItems = (num: number): Array<ArrayItem> => {
    let generatedNodes: Array<ArrayItem> = []
    for (let i = 0; i < num; i++) {
        let node: ArrayItem;
        node = {
            index: i,
            value: Math.round(Math.random() * 100),
            current: false,
            sorted: false,
            swapped: false
        }
        generatedNodes[i] = node;
    }
    return generatedNodes;
}
