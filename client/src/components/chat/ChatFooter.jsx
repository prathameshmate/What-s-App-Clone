import React from 'react';
import EmojiEmotionsOutlinedIcon from '@mui/icons-material/EmojiEmotionsOutlined';
import AttachFileOutlinedIcon from '@mui/icons-material/AttachFileOutlined';
import MicOutlinedIcon from '@mui/icons-material/MicOutlined';

const ChatFooter = (props) => {

    return (
        <>
            <div className='chatFooter_container'>
                <EmojiEmotionsOutlinedIcon className='emoji' />
                <AttachFileOutlinedIcon className='chipIcon' />
                <div className='chatFooter_inp_div'>
                    <input
                        className='chatFooter_inp'
                        type="text"
                        placeholder='Type a message'
                        onKeyPress={(e) => { return props.sendText(e); }}
                        onChange={(e) => { return props.updateValue(e.target.value) }}
                        value={props.value}

                    />
                </div>
                <MicOutlinedIcon className='mic' />
            </div>
        </>
    )
}
export default ChatFooter;