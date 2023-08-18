import React, { useState, useEffect } from 'react';
import annyang from 'annyang';
import {useNavigate } from "react-router-dom";
const SearchByVoice = () => {
    const navigate = useNavigate();
    const [text, setText] = useState('');

    function startListening() {
        const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
        recognition.lang = 'vi-VN';
        recognition.onresult = function(event) {
            const result = event.results[event.resultIndex][0].transcript;
            setText(result);
        };
        recognition.start();
    }
    if (annyang) {
        const commands = {
            'type *text': function(text) {
                setText(text);
            }
        };
        annyang.addCommands(commands);
    }
    if(text!=''){
        if (text.endsWith('.')) {
            navigate(`/search/${text.slice(0, -1)}`);
            setText('');
        }else{
            navigate(`/search/${text}`);
        }
    }
    return (
        <div>
            <button onClick={startListening} style={{border:"none"}}><i className="fa fa-microphone"></i></button>
        </div>
    );
};
export default SearchByVoice;
