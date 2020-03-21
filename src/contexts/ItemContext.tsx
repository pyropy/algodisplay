import React, { useState, useContext } from 'react';
import ItemContextProps  from '../types/ItemContextProps';
import { ArrayItem } from '../types/ArrayItem';
import { generateItems } from '../helpers';


// todo: Refactor context provider to Vlado's example
const ItemContext = React.createContext<ItemContextProps>({} as ItemContextProps);

const ItemProvider = (props: any) => {
    const [itemNum, setItemNum] = useState<Number>(50);
    const [items, setItems] = useState<ArrayItem[]>(generateItems(50));

    return <ItemContext.Provider value={{arrayItems: items, itemNum, setItems, setItemNum}} {...props} />
}

const useItems = () => useContext(ItemContext);


export {ItemProvider, useItems};

// import React, { useState, useContext, createContext } from 'react';
// import api from '../api/index';

// export interface UserAbilities {
//    subject: string;
//    actions: string[];
// }

// export interface User {
//    name: string;
//    can: UserAbilities[];
//    access_type: string;
//    access_token: string;
// }

// export interface UserContextProps {
//    user: User | undefined;
//    login: (user: User) => void;
//    logout: () => void;
// }

// const userContextDefaultValues: UserContextProps = {
//    user: undefined,
//    login: (user: User) => {},
//    logout: () => {}
// };

// const UserContext = createContext(userContextDefaultValues);

// const UserProvider = (props: any) => {
//    const [ user, setUser ] = useState<User | undefined>(undefined);

//    const login = (user: User) => {
//       setUser({ ...user });
//    };

//    const logout = async () => {
//       await api.SSO.logout();
//       setUser(undefined);
//    };

//    return <UserContext.Provider value={{ user, login, logout }} {...props} />;
// };

// const useUser = () => useContext(UserContext);

// export { UserProvider, useUser };