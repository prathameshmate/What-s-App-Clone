import React from 'react';

const EmptyChat = () => {

    const url = "https://ik.imagekit.io/ag/wp-content/uploads/2015/01/QR-connected.png";

    return (
        <>
            <div className='img_Container'>
                <img src={url} alt="img.png" />
            </div>
        </>
    )
}
export default EmptyChat;