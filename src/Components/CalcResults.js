import React from 'react';

const CalcResults = (props) => {
    return (
        <div>
            <h1>BG: {props.result.BG}</h1>
            <h1>A1c: {props.result.A1c}</h1>
        </div>
    )
}
export default CalcResults;