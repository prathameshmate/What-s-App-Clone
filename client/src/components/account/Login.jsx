import React, { useContext } from 'react';
import { GoogleLogin } from "react-google-login";

import { AccountContext } from '../../Context API/AccountProvider.jsx';

import { clientID } from '../../constants/data.js';

import { addUser } from '../../services/api.js';

const Login = () => {

    const { account, updateAccount } = useContext(AccountContext);

    const onLoginSuccess = (res) => {
        console.log("Login successfull...", res.profileObj);
        updateAccount(res.profileObj);
        addUser(res.profileObj);
    }

    const onLoginFailed = () => {
        console.log("Login failed...")
    }

    return (
        <>
            <div className='login_container'>
                <div className='login'>
                    <div className='left_Box'>
                        <p>To use WhatsApp on your computer: </p>
                        <ol className='order_List'>
                            <li className='list'>Open WhatsApp on your phone </li>
                            <li className='list'>Tap <span>Menu</span>  or <span>Setting</span> and select <span>Linked Devices</span></li>
                            <li className='list'>Point your phone to this screen to capture the code</li>
                        </ol>
                    </div>
                    <div className='right_Box'>
                        <img src="https://www.ginifab.com/feeds/qr_code/img/qrcode.jpg" alt="qrcode" />
                        <div className='login_Btn'>

                            <GoogleLogin
                                clientId={clientID}
                                buttonText=""
                                isSignedIn={true}
                                onSuccess={onLoginSuccess}
                                onFailure={onLoginFailed}
                                cookiePolicy={'single_host_origin'}

                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Login;