import React, { useContext } from 'react';
import Menu from './Menu/Menu';
import Chat from "./chat/Chat.jsx"
import EmptyChat from './chat/EmptyChat.jsx';

import { UserContext } from '../Context API/UserProvider';

const ChatBox = () => {

    const { person } = useContext(UserContext);

    return (
        <>
            <div className='chatBox_container'>
                <div className='ChatBox'>
                    <div className="leftComponent">
                        <Menu />
                    </div>
                    <div className="rightComponent">
                        {
                            (Object.keys(person).length) ? <Chat /> : <EmptyChat />
                        }

                    </div>
                </div>
            </div>
        </>
    )
}
export default ChatBox;