import React, { useState } from 'react';


export default function Message(props) {
    return (
        <div>
            <h1> Counter Value is : {props.counter} </h1>
        </div>
    );
}

export function List() {
    let [colour, setColour] = useState(true)
    return (
        <div>
            <ol className={colour ? 'green' : 'red'}>
                <li>Java</li>
                <li>Javascript</li>
                <li>React</li>
            </ol>
            <button onClick={() => setColour(!colour)}>
                Change Colour
            </button>
        </div>
    );
}






































