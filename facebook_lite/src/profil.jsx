import React from 'react';
import ReactDOM from 'react-dom';
import {Card, Row, Col, Image, Button} from 'react-bootstrap';
import './index.css';



class Profil extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            choixCouleur : [
                {
                    id: '0',
                    code: '',
                },
                {
                    id: '1',
                    code: 'primary',
                },
                {
                    id: '2',
                    code: 'secondary',
                },
                {
                    id: '3',
                    code: 'success',
                },
                {
                    id: '4',
                    code: 'danger',
                },
                {
                    id: '5',
                    code: 'warning',
                },
                {
                    id: '6',
                    code: 'info',
                },
                {
                    id: '7',
                    code: 'dark',
                },
                {
                    id: '8',
                    code: 'light',
                },
            ],
        }
    }

    render() {
      return  (
        <div class="profil">
        <Card bg= {this.state.choixCouleur[this.props.user.idCouleur].code}>
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
                    <Button variant="light" onClick={() => this.props.numeroCouleur(this.props.user.id)}>Change Style</Button>
                </div>
            </div>

        </Card>
        </div>
      )
    }
}

export default Profil;



