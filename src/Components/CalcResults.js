import React from 'react';

const CalcResults = (props) => {
    return (
        <div className="calcWrapper">
            <h1>BG: {props.result.BG}</h1>
            <h1>A1c: {props.result.A1c}</h1>
            <button onClick={props.onDeleteClick}>Delele</button>
            <button onClick={props.onEditClick}>Edit</button>
            <input onChange={(e)=> props.updateBGClick(e.target.value)}/>

        </div>
    )
}
export default CalcResults;