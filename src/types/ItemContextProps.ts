import { ArrayItem } from "./ArrayItem";

type ItemContextProps = {
    unsortedItems: Array<ArrayItem>;
    sortedItems: Array<ArrayItem>;
    arrayItems: Array<ArrayItem>;
    itemNum: Number;
    setItems: Function;
    setItemNum: Function;
}

export default ItemContextProps;