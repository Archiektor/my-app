import React from "react";

type AccordionPropsType = {
    title: string;
    collapsed: boolean
}
type AccordionTitlePropsType = {
    title: string;
}

export function Accordion(props: AccordionPropsType) {
    const {title, collapsed} = props;

    if (collapsed) {
        return <div>
            <AccordionTitle title={title}/>
        </div>
    } else {
        return <div>
            <AccordionTitle title={title}/>
            <AccordeonBody/>
        </div>
    }
}

const AccordionTitle = (props: AccordionTitlePropsType) => {
    const {title} = props;
    return (<h3>{title}</h3>)
}


const AccordeonBody = () => {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}

