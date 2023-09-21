import React, { createContext, useState } from 'react'

export const LoginContext = createContext(null);

const ContextProvider = ({ children }) => {

    const [account, setAcoount] = useState('');

    return <>
        <LoginContext.Provider value={{ account, setAcoount }}>
            {children}
        </LoginContext.Provider>

    </>;

}

export default ContextProvider
