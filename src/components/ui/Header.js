import React from 'react';
import InputWrapper from './InputWrapper';

export default function Header(props) {
    return (
        <header>
            <h3>&nbsp;&nbsp;WORKOUT GYM&nbsp;&nbsp;❚█══█❚ █▀█ █▄█ ▀█▀ &nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;with ija aini</h3>
            <InputWrapper {...props}/>
        </header>
    );
}
