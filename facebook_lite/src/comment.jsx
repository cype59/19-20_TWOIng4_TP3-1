import React from 'react';
import ReactDOM from 'react-dom';
import {Card, Row, Col, Container, Button} from 'react-bootstrap';
import './index.css';



class Comment extends React.Component {

  constructor(props) {
    super(props);

    this.handleSuper = this.handleSuper.bind(this);

    this.state = {
      nbSuper: 0
    }
  }

  handleSuper(event) {
    event.preventDefault();
    this.setState({nbSuper: this.state.nbSuper + 1});
  }


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
                    <Button variant="light" onClick={this.handleSuper}>C'est super</Button>
                    <p>Nombre : {this.state.nbSuper}</p>
            </div>
        </Card>
        </div>
      )
    }
}

export default Comment;