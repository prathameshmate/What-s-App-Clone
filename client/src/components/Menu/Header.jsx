import React, { useContext } from 'react';
import ChatIcon from '@mui/icons-material/Chat';

import HeaderMenu from './HeaderMenu';
import Drawer from "../drawer/Drawer.jsx"

const Header = () => {

    return (
        <>
            <div className='header'>
                <Drawer />
                <div className='icons'>
                    <ChatIcon />
                    <HeaderMenu />
                </div>
            </div>

        </>
    )
}
export default Header;