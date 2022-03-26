import React, { useState } from 'react';
import Header from './Header.jsx';
import Search from './Search.jsx';
import Conversations from './Conversations.jsx';

const Menu = () => {

    const [text, updateText] = useState('');
    // console.log("text is : ", text);
    return (
        <>
            <Header />
            <Search updateText={updateText} />
            <Conversations text={text} />
        </>
    )
}
export default Menu;