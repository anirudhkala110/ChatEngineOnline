import React, { useState } from 'react'
import { MultiChatSocket, MultiChatWindow, useMultiChatLogic } from 'react-chat-engine-advanced'
import { PrettyChatWindow } from 'react-chat-engine-pretty';

const ChatsPage = (props) => {
    const publicKey = "52443dd3-dcc6-4534-85f7-c23eaec614d0";
    const [theme, setTheme] = useState(true);
    const chatProps = useMultiChatLogic(publicKey, props.user.username, props.user.secret);

    // console.log('Chat Props:', chatProps);

    return (
        <div className="background" style={{ height: "100vh", padding: '' }}>
            <button 
                onClick={() => setTheme(!theme)} 
                style={{ 
                    width: '50px', 
                    background: `${theme ? '' : 'black'}`, 
                    color: `${theme ? '' : 'white'}`, 
                    cursor: "pointer", 
                    position: 'fixed', 
                    zIndex: 50, 
                    top: '12%', 
                    borderRadius: "50px", 
                    right: '1%', 
                    height: '50px' 
                }}
            >
                {theme ? "Dark" : "Light"}
            </button>
            {
                theme ? (
                    <div style={{ width: "100%", height: '100%' }}>
                        <MultiChatSocket {...chatProps} />
                        <MultiChatWindow {...chatProps} style={{ height: '100%' }} />
                    </div>
                ) : (
                    <div style={{ width: "100%", height: '100%' }}>
                        {props.user.username && props.user.secret ? (
                            <PrettyChatWindow
                                publicKey={publicKey}
                                userName={props.user.username}
                                userSecret={props.user.secret}
                                style={{ height: '100vh', color: 'white' }}
                            />
                        ) : (
                            <p style={{color:'white'}}>Loading chat...</p>
                        )}
                    </div>
                )
            }
        </div>
    )
};

export default ChatsPage;
