import React from "react";
import './OnOff.css';

type OnOffType = {
    on: boolean
}
export const OnOff: React.FC<OnOffType> = ({on}) => {
    let myStyle1, myStyle2, myStyle3;

    if (on) {
        myStyle1 = {backgroundColor: 'green'}
        myStyle2 = {backgroundColor: `transparent`}
        myStyle3 = {backgroundColor: 'green'}
    } else {
        myStyle1 = {backgroundColor: `transparent`}
        myStyle2 = {backgroundColor: 'red'}
        myStyle3 = {backgroundColor: 'red'}
    }

    return (
        <div className={`container`}>
            <div style={myStyle1}>On</div>
            <div style={myStyle2}>Off</div>
            <div style={myStyle3}></div>
        </div>
    )
}