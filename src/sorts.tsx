import { ArrayNode } from './types/ArrayNode'

function* bubbleSort(nodes: Array<ArrayNode>): Generator<Array<ArrayNode>> {
    for (let i = 1; i < nodes.length; i++) {
        for (let j = 0; j < nodes.length - 1; j++) {
            if (nodes[j].value > nodes[j + 1].value) {
                let first_temp = nodes[j]
                let second_temp = nodes[j + 1]
                nodes[j] = second_temp
                nodes[j + 1] = first_temp
            }
            yield nodes;
        }
    }
}

export default bubbleSort;