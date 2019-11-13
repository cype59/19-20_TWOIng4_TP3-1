import React from 'react';
import { Card, Button } from 'react-bootstrap';
import './index.css';



class Comment extends React.Component {

  render() {
    return (
      <div class="profil">
        <Card>
          <div class='Comment'>
            <div class="contenuComment">
              {this.props.user.dernier_commentaire}
              <br></br>
              <br></br>
              <p><i class="fas fa-thumbs-up"></i> {this.props.user.nbSuper}</p>
            </div>

          </div>
          <Card.Footer>
          <div class="bouttonSuper">
            <Button variant="outline-primary" onClick={() => this.props.compteSuper(this.props.user.id)}><i class="fas fa-thumbs-up"></i> C'est super</Button>
          </div>
          </Card.Footer>
        </Card>
      </div>
    )
  }
}

export default Comment;