import React, { useContext, useEffect, useState } from 'react';
import ChatFooter from './ChatFooter.jsx';
import { AccountContext } from '../../Context API/AccountProvider.jsx';
import { newMessage, getMessages } from '../../services/api.js';

import Message from './Message.jsx';

const ChatMessages = (props) => {

    const [value, updateValue] = useState('');
    const [messages, updateMessages] = useState([]);
    const [incomingMessage, updateIncomingMessage] = useState({});
    // console.log("messages : ", messages);


    const { account, socket ,  newMessageFlag ,  updateNewMessageFlag } = useContext(AccountContext);

    useEffect(() => {
        socket.current.on("getMessage", (data) => {
            updateIncomingMessage({
                sender: data.senderId,
                text: data.text,
                createdAt: Date.now()
            })
        })
    }, [])

    
    useEffect(() => {
        incomingMessage && props.conversation?.members?.includes(incomingMessage.sender) &&
            updateMessages((prev) => {return [...prev, incomingMessage]; });

    }, [incomingMessage, props.conversation]);

    useEffect(() => {
        const getMessagesDetails = async () => {
            const array_messages = await getMessages(props.conversation._id);
            updateMessages(array_messages);
        }
        getMessagesDetails();
    }, [props.conversation._id , props.person._id , newMessageFlag ])

    useEffect(() => {
        var element = document.getElementById("msgs_container");
        element.scrollTop = element.scrollHeight;

    })


    const receiverId = props.conversation?.members?.find((member) => { return (member !== account.googleId); });
   

    const sendText = async (e) => {
        const code = e.keycode || e.which;
        if (!value) {
            return;
        }

        if (code === 13) {
            const message = {
                conversationId: props.conversation._id,
                sender: account.googleId,
                text: value
            }

            socket.current.emit("sendMessage", {
                senderId: account.googleId,
                receiverId: receiverId,
                text: value
            })

            // console.log("message that we want to send :: ", message);

            await newMessage(message);

            updateValue("");
            updateNewMessageFlag((prev)=>{ return !prev})
        }

    }

    return (
        <>
            <div className='msg_Container'>
                <div id='msgs_container'>

                    <div className='msgs'>
                        {
                            messages.map((message , ind) => {
                                return (
                                    <Message key={ind} message={message} />

                                );
                            })
                        }
                    </div>
                </div>
                <ChatFooter
                    sendText={sendText}
                    updateValue={updateValue}
                    value={value}
                />
            </div>
        </>
    )
}
export default ChatMessages;