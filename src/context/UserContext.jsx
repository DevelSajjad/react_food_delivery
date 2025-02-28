import React, { createContext, useState } from 'react'
export const  dataContext = createContext();
function UserContext({children}) {
    let [input, setInput] = useState('');
    let [category, setCategory] = useState('');
    let [cartOpen, setCartOpen] = useState(false);

    let data = {
        input,
        setInput,
        category,
        setCategory,
        cartOpen,
        setCartOpen
    };
  return (
    <>
        <dataContext.Provider value={data}>
            {children}
        </dataContext.Provider>
    </>
  )
}

export default UserContext