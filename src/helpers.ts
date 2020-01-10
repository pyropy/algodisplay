import { ArrayNode } from './types/ArrayNode'

export const generateNodes = (num: number): Array<ArrayNode> => {
    let generatedNodes: Array<ArrayNode> = []
    for (let i = 0; i < num; i++) {
        let node: ArrayNode;
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
