import React, { useContext } from 'react';
import Login from "./account/Login.jsx"
import ChatBox from './ChatBox.jsx';
import { AccountContext } from '../Context API/AccountProvider.jsx';

const App = () => {

    const { account } = useContext(AccountContext);

    return (
        <>
            <div className={account ? "container_height" : "container"}>
                <div className={account ? "messanger_container_height" : "messanger_container"}>
                    {account ? <ChatBox /> : <Login />}

                </div>
            </div>

        </>
    )
}
export default App;