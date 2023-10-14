import React from 'react';
import './App.css';
import {OnOff} from './components/OnOff/OnOff';

const App = () => {
    return (
        <div>
            <OnOff on={false}/>
            {/*<Accordion title={'Menu'} collapsed={true}/>*/}
            {/*<Accordion title={'Users'} collapsed={false}/>*/}
            {/*<Rating value={1}/>*/}
            {/*<Rating value={2}/>*/}
            {/*<Rating value={3}/>*/}
            {/*<Rating value={4}/>*/}
            {/*<Rating value={5}/>*/}
        </div>
    );
}

export default App;
