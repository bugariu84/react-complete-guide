import React from 'react';


const person = (props) => {
    return (
        <div onClick={props.click}>
            <p>Hi, my name is <i>{props.name}</i> and i'm <i>{props.age}</i> years young!</p>
            {props.children ? <i>{props.children}</i> : ""}
        </div>
    );
};

export default person;