import React from 'react';
import ReactDOM from 'react-dom';
import { Card, Row, Col, Container, Button } from 'react-bootstrap';
import './index.css';



class Comment extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div class="profil">
        <Card>
          <div class='Comment'>
            <div class="contenuComment">
              {this.props.user.dernier_commentaire}
            </div>
          </div>
          <div class="bouttonSuper">
            <Button variant="light" onClick={() => this.props.compteSuper(this.props.user.id)}>C'est super</Button>
            <p>Nombre : {this.props.user.nbSuper}</p>
          </div>
        </Card>
      </div>
    )
  }
}

export default Comment;