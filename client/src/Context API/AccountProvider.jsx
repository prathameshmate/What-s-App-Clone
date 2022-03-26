import React, { createContext, useEffect, useRef, useState } from 'react'
import { io } from "socket.io-client"

export const AccountContext = createContext(null);

const AccountProvider = ({ children }) => {

    const [account, updateAccount] = useState(null);
    const [activeUsers, updateActiveUsers] = useState([]);
    const [newMessageFlag, updateNewMessageFlag] = useState(false);
    // console.log("flag answer is : " + newMessageFlag);


    // console.log("activeUsers is : ", activeUsers);
    // console.log("account is : ", account);

    const socket = useRef();

    useEffect(() => {
        socket.current = io("http://localhost:9000")
    }, [])


    return (
        <>
            <AccountContext.Provider value={
                {
                    account: account,
                    updateAccount: updateAccount,
                    socket: socket,
                    activeUsers: activeUsers,
                    updateActiveUsers: updateActiveUsers,
                    newMessageFlag: newMessageFlag,
                    updateNewMessageFlag: updateNewMessageFlag
                }}
            >

                {children}
            </AccountContext.Provider>
        </>
    )
}

export default AccountProvider;

