import React from 'react';
import { Card, Row, Col, Button } from 'react-bootstrap';
import './index.css';



class Profil extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            choixCouleur: [
                {
                    id: '0',
                    code: '',
                    text: 'black',
                },
                {
                    id: '1',
                    code: 'primary',
                    text: 'white',

                },
                {
                    id: '2',
                    code: 'secondary',
                    text: 'white',

                },
                {
                    id: '3',
                    code: 'success',
                    text: 'white',
                },
                {
                    id: '4',
                    code: 'danger',
                    text: 'white',
                },
                {
                    id: '5',
                    code: 'warning',
                    text: 'white',
                },
                {
                    id: '6',
                    code: 'info',
                    text: 'white',
                },
                {
                    id: '7',
                    code: 'dark',
                    text: 'white',
                },
                {
                    id: '8',
                    code: 'light',
                    text: 'black',
                },
            ],
        }
    }

    render() {
        return (
            <div class="profil">
                <Card bg={this.state.choixCouleur[this.props.user.idCouleur].code} text={this.state.choixCouleur[this.props.user.idCouleur].text}>
                    <img class="Avatar" src={this.props.user.avatarUrl} alt={this.props.user.nom} />
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



