import React, { useContext } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import { UserContext } from '../../Context API/UserProvider.jsx';
import { AccountContext } from '../../Context API/AccountProvider.jsx';

const ChatHeader = () => {

    const { person } = useContext(UserContext);

    const { activeUsers } = useContext(AccountContext);
    // console.log("activeUsers form chatheader : ", activeUsers);

    return (
        <>
            <div className='chatHeader_Container'>
                <img src={person.imageUrl} alt="dp" className='dp' />
                <div className='name_status'>
                    <p className='name'>{person.name}</p>
                    <p className='status'>
                        {
                            (activeUsers?.find((user) => {
                                return (user.userId === person.googleId)
                            })) ? "Online" : "Offline"
                        }
                    </p>
                </div>
                <div className='icons'>
                    <SearchIcon />
                    <MoreVertIcon />
                </div>
            </div>
        </>
    )
}
export default ChatHeader;