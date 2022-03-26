import React, { useState, useContext, useEffect } from 'react';
import { AccountContext } from '../../Context API/AccountProvider';

import { getConversation, setConversation } from '../../services/api';

import { UserContext } from '../../Context API/UserProvider';

const Conversation = (props) => {

    const [message, updateMessage] = useState({})
    // console.log("pop up message that show from convestion: ", message);

    const { account, newMessageFlag } = useContext(AccountContext);
    const { updatePerson } = useContext(UserContext);


    const URL = props.user.imageUrl;
    const name = props.user.name;

    useEffect(() => {
        const getConversationMessage = async () => {
            const obj = await getConversation({ sender: account.googleId, receiver: props.user.googleId });
            updateMessage({ text: obj.message, timestamp: obj.updatedAt })
        }
        getConversationMessage();

    }, [newMessageFlag])

    const setUser = () => {
        setConversation({ senderId: account.googleId, receiverId: props.user.googleId });
        updatePerson(props.user);
    }

    var meridiem = " am ";

    const formatHour = (hour) => {
        if (hour >= 12) {
            meridiem = " pm ";
        }
        if (hour > 12) {
            hour = hour - 12;
        }
        return hour;
    }

    const formatMinute = (minutes) => {
        return (
            (minutes < 10) ? "0" + minutes : minutes
        );
    }

    return (
        <>
            <div className='conversation_Container' onClick={() => { return setUser() }}>
                <div className='conversation_Img'>
                    <img src={URL} alt="display_Picture" />
                </div>
                <div className='conversation_Name'>
                    <div className='name_Timestamp'>
                        <p>{name}</p>
                        <div className='timestamp'>
                            {formatHour(new Date(message.timestamp).getHours())}
                            :
                            {formatMinute(new Date(message.timestamp).getMinutes())}

                            {meridiem}
                        </div>
                    </div>
                    <div >
                        {message.text}
                    </div>
                </div>
            </div>
        </>
    )
}
export default Conversation;