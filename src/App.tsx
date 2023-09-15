import React from 'react';
import './App.css';
import {Accordeon} from "./components/Accordeon/Accordeon";
import Rating from "./components/Rating/Rating";

type PageTitlePropsType = {
    title: string;
}

function App() {
    return (
        <div>
            <PageTitle title={'This is APP Component'}/>
            <Accordeon title={'Bajan'} collapsed={false}/>
            <Accordeon title={'Garmon'} collapsed={false}/>
            <Rating value={3}/>
        </div>
    );
}

function PageTitle(props: PageTitlePropsType) {
    const {title} = props;
    return <h1>{title}</h1>
}

export default App;
