import React from 'react';
import ReactDOM from 'react-dom';
import {Card, Row, Col, Container, Button} from 'react-bootstrap';
import './index.css';



class Profil extends React.Component {
    render() {
      return  (
        <div class="profil">
        <Card>
            <img class="Avatar" src={this.props.user.avatarUrl}/>
            <div class='infoProfil'>
                <Row>
                    <Col>
                        <div>
                            <p>
                               <span className={'font-weight-bold'}>Nom :  </span>
                                {this.props.user.nom}
                            </p>
                        </div>
                    </Col>
                    <Col>
                        <div>
                            <p>
                               <span className={'font-weight-bold'}>Prenom :  </span>
                                {this.props.user.prenom}
                            </p>
                        </div>
                    </Col>
                </Row>
                <div>
                    <p>
                        <span className={'font-weight-bold'}>Date de naissance :  </span>
                        {this.props.user.date_naissance}
                    </p>
                </div>
                <div class="bouttonStyle">
                    <Button variant="light">Change Style</Button>
                </div>
            </div>

        </Card>
        </div>
      )
    }
}

export default Profil;



