import React from 'react';
import './App.css';
import {Accordion} from "./components/Accordeon/Accordion";

type PageTitlePropsType = {
    title: string;
}

function App() {
    return (
        <div>
            <PageTitle title={'Something new'}/>
            <Accordion title={'Bajan'} collapsed={false}/>
            <Accordion title={'Garmon'} collapsed={false}/>
        </div>
    );
}

function PageTitle(props: PageTitlePropsType) {
    const {title} = props;
    return <h1>{title}</h1>
}

export default App;
