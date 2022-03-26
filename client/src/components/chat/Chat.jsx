import React, { useContext, useEffect, useState } from 'react';
import ChatHeader from './ChatHeader.jsx';
import ChatMessages from './ChatMessages.jsx';
import { AccountContext } from '../../Context API/AccountProvider.jsx';
import { UserContext } from '../../Context API/UserProvider.jsx';
import { getConversation } from '../../services/api.js';

const Chat = () => {

    const [conversation, updateConversation] = useState({});
    // console.log("conversation :: ", conversation);

    const { account } = useContext(AccountContext);
    const { person } = useContext(UserContext);


    useEffect(() => {

        const getConversationDetails = async () => {
            const obj = await getConversation({ sender: account.googleId, receiver: person.googleId });
            updateConversation(obj);
        }
        getConversationDetails();

    }, [person.googleId])

    return (
        <>
            <div>
                <ChatHeader />
                <ChatMessages conversation={conversation} person={person} />
            </div>
        </>
    )
}
export default Chat; 