import React, { useState } from 'react';
import axios from 'axios';

const ChatCat = () => {
    const [input, setInput] = useState('');
    const [response, setResponse] = useState('');

    const handleSendMessage = async () => {
        try {
            const res = await axios.post('http://localhost:4000/chat', {
                message: input,
            });
            setResponse(res.data.reply);
        } catch (error) {
            console.error('Error communicating with ChatCat:', error);
        }
    };

    return (
        <div>
            <h1>ChatCat</h1>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type a message..."
            />
            <button onClick={handleSendMessage}>Send</button>
            <div>
                <strong>Response:</strong> {response}
            </div>
        </div>
    );
};

export default ChatCat;
