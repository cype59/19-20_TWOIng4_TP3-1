import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navbar from './navbar';



class Page extends React.Component {
    render() {
        return (
            <div>
                <Navbar></Navbar>
            </div>
        )
    }
}

ReactDOM.render(
    
    <Page />, 
    document.getElementById('root')
);


