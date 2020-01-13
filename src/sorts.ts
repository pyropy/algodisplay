import { ArrayItem } from './types/ArrayItem'

export const bubbleSort = (items: Array<ArrayItem>, setItemsHandler: (itmes: Array<ArrayItem>) => void) => {
    for (let i = 1; i < items.length; i++) {
        for (let j = 0; j < items.length - 1; j++) {
            if (items[j].value > items[j + 1].value) {
                [items[j], items[j + 1]] = [items[j + 1], items[j]]
            }
            let updatedItems = [...items]
            setTimeout(() => {
                setItemsHandler(updatedItems)
            }, i)
        }
    }
}