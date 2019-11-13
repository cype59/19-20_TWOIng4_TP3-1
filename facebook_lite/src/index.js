import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button} from 'react-bootstrap';
import Profil from './profil';
import Comment from './comment';
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


