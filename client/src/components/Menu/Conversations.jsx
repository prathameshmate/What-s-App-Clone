import React, { useContext, useEffect, useState } from 'react';
import { getUsers } from '../../services/api.js';
import Conversation from './Conversation.jsx';

import { AccountContext } from '../../Context API/AccountProvider.jsx';

const Conversations = (props) => {

    const [arr, updateArr] = useState([]);
    const { account, socket, updateActiveUsers } = useContext(AccountContext);

    useEffect(() => {
        const fetchData = async () => {
            const results = await getUsers();
            // console.log("result is ", results);
            const newResults = results.filter((user) => {
                return (
                    user.name.toLowerCase().includes(props.text.toLowerCase())
                )
            })
            // console.log("newResults is ", newResults);
            updateArr(newResults);
        }
        fetchData();
    }, [props.text])


    useEffect(() => {
        socket.current.emit("addUser", account.googleId);
        socket.current.on("getUsers", (users) => {
            updateActiveUsers(users);
        })
    } , [account])

    return (
        <>
            {
                arr.map((user, ind) => {
                    if (account.googleId !== user.googleId) {
                        return (
                            <Conversation key={ind} user={user} />
                        );
                    }
                })
            }
        </>
    )
}
export default Conversations;