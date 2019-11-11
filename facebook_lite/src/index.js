import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button} from 'react-bootstrap';
import Profil from './profil';
import Comment from './comment';


class Page extends React.Component {
    render() {
        const infoProfil= {
            nom:'Pierron',
            prenom:'Thomas',
            date_naissance: '05/01/1999',
            avatarUrl: 'https://placekitten.com/g/64/64',
            dernier_commentaire: 'hrzjkrhezlhrezjkhrkezjlrhezjklhrejkhrzkljhrekljhrkrjfdsbfdbsnfrzrzerezrezerzerkhgkjgkjhgkhjgkjhgkhjgkhgjgk',
        };

        return (
            <div>
                <Profil user={infoProfil}></Profil>
                <Comment user={infoProfil}></Comment>
            </div>
        )
    }
}

ReactDOM.render(
    
    <Page />, 
    document.getElementById('root')
);


