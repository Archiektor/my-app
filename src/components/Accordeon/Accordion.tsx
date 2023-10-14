import React from "react";

type AccordionPropsType = {
    title: string;
    collapsed: boolean
}
type AccordionTitlePropsType = {
    title: string;
}

export const Accordion: React.FC<AccordionPropsType> = ({title, collapsed}) => {
    return <div>
        <AccordionTitle title={title}/>
        {!collapsed && <AccordeonBody/>}
    </div>
}

const AccordionTitle: React.FC<AccordionTitlePropsType> = ({title}) => {
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

