import React, { useContext } from 'react';
import { AccountContext } from '../../Context API/AccountProvider';

const Message = ({ message }) => {

    const { account } = useContext(AccountContext);

    var meridiem = " am ";

    const formateHour = (hour) => {
        if (hour >= 12)
            meridiem = " pm ";
        if (hour > 12)
            hour = hour - 12;
        return hour;
    }

    const formateMinute = (minute) => {
        return (
            (minute < 10) ? "0" + minute : minute
        );
    }

    return (
        <>
            <div className={(account.googleId === message.sender) ? 'message_Container_Sender' : 'message_Container'} >
                <p className='text'> {message.text} </p>
                <p className='time'>
                    {formateHour(new Date(message.createdAt).getHours())}
                    :
                    {formateMinute(new Date(message.createdAt).getMinutes())}
                    {meridiem}
                </p>
            </div>
        </>
    )
}
export default Message;
