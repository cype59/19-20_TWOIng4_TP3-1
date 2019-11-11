import React from 'react';
import ReactDOM from 'react-dom';
import {Card, Row, Col, Container, Button} from 'react-bootstrap';
import './index.css';



class Comment extends React.Component {
    render() {
      return  (
        <div class="profil">
        <Card>
            <div class='Comment'>
                <div class="contenuComment">
                    {this.props.user.dernier_commentaire}
                </div>
            </div>
            <div class="bouttonSuper">
                    <Button variant="light">C'est super</Button>
            </div>
        </Card>
        </div>
      )
    }
}

export default Comment;