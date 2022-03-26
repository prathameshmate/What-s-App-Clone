import React, { useContext, useEffect } from 'react';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { GoogleLogout } from "react-google-login";
import { clientID } from '../../constants/data';

import { AccountContext } from "../../Context API/AccountProvider.jsx"

const HeaderMenu = () => {

    useEffect(() => {
        document.addEventListener("mouseup", fun1, false)
    });

    const { updateAccount } = useContext(AccountContext);

    const onLogoutSuccess = () => {
        alert("You have been logged out successfully");
        console.clear();
        updateAccount(null);
    }

    const fun = () => {
        var access1 = window.document.getElementById("menu");
        access1.style.display = "block";
    }
    const fun1 = (e) => {
        // adding addEventListern to the whole body exprcet this myId
        var myId = e.target.id;
        if ((myId !== 'menu')) {
            var access2 = window.document.getElementById("menu");
            access2.style.display = "none";;
        }

    }

    const fun2 = () => {
        var access3 = document.getElementById("drawer_Container");
        access3.style.display = "block";
    }

    return (
        <>
            <MoreVertIcon onClick={fun} />
            <div id='menu' style={{ display: "none" }} >
                <p id='profile' className="menuItem" onClick={fun2}>Profile</p>
                <div className="menuItem" >
                    <GoogleLogout
                        className="logout"
                        clientId={clientID}
                        buttonText="Logout"
                        onLogoutSuccess={onLogoutSuccess}
                    />
                </div>
            </div>
        </>
    )
}
export default HeaderMenu;