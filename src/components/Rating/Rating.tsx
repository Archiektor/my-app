import React from "react";

type RatingPropsType = {
    value: 0 | 1 | 2 | 3 | 4 | 5;
}

const Rating = (props: RatingPropsType) => {

    return (
        <div>
            <Star selected={true}/>
            <Star selected={false}/>
            <Star selected={true}/>
            <Star selected={false}/>
            <Star selected={true}/>
        </div>
    )
}

type StarPropsType = {
    selected: boolean;
}

function Star(props: StarPropsType) {
    return props.selected ? <span><b>star </b></span> : <span>star </span>
}

export default Rating;