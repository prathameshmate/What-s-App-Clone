import React, { useContext, useEffect } from 'react';
import { AccountContext } from '../../Context API/AccountProvider';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
const Drawer = () => {

    useEffect(() => {
        document.addEventListener("mouseup", fun1, false)
    })

    const { account } = useContext(AccountContext);

    const fun = () => {
        var access1 = document.getElementById("drawer_Container");
        access1.style.display = "block";
    }

    const fun1 = (e) => {
        // adding addEventListern to the whole body exprcet this myClass
        var myClass = e.target.className;
        if ((myClass !=='drawer_Container') && (myClass !=="drawer_Header") && (myClass !=="profile") && (myClass !=="drawer_Profile") && (myClass !=="profile_Image") && (myClass !=="image")  && (myClass !=="profile_Name") && (myClass !=="profile_description" )  && (myClass !=="extra" )) {
            var access2 = document.getElementById("drawer_Container");
            access2.style.display = "none";
        }
    }

    return (
        <>
            <img src={account.imageUrl} alt="Display_picture" className='avtar' onClick={fun} />
            <div id='drawer_Container' className='drawer_Container' style={{ display: "none" }}>
                <div className='drawer_Header'>
                    <ArrowBackIcon />
                    <p className='profile'>Profile</p>
                </div>
                <div className='drawer_Profile'>
                    <div className='profile_Image'>
                        <img src={account.imageUrl} alt="DP" className='image' />
                    </div>
                    <div className='profile_Name'>
                        <p className='extra' >Your name</p>
                        <p className='extra'>{account.name} </p>
                    </div>
                    <div className='profile_description'>
                        <p className='extra'>This is not your username or pin. This name will be visible to your WhatsApp contacts.</p>
                    </div>
                    <div>
                    <div className='profile_Name'>
                        <p className='extra'>About</p>
                        <p className='extra'>Eat! Sleep! Code! Repeat! </p>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Drawer;