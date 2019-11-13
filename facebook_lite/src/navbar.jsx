import React from 'react';
import ReactDOM from 'react-dom';
import Nav from 'react-bootstrap/Nav';
import './index.css';
import Profil from './profil';
import Comment from './comment';

class Navbar extends React.Component {
    constructor(props) {
        super(props)
        this.handleClickProfil = this.handleClickProfil.bind(this)
        this.handleCompteSuper = this.handleCompteSuper.bind(this)
        this.handleCouleur = this.handleCouleur.bind(this)
        this.state = {
            id_select: 0,
            infoProfil : [
                {
                    id: '0',
                    nom: 'Pierron',
                    prenom: 'Thomas',
                    date_naissance: '05/01/1999',
                    avatarUrl: 'https://placekitten.com/g/64/64',
                    dernier_commentaire: 'aabb',
                    nbSuper: 0,
                    idCouleur: 0,
                },
                {
                    id: '1',
                    nom: 'djskl',
                    prenom: 'jdslk',
                    date_naissance: '05/01/1999',
                    avatarUrl: 'https://placekitten.com/g/64/64',
                    dernier_commentaire: 'jfdklk',
                    nbSuper: 0,
                    idCouleur: 0,
                },
                {
                    id: '2',
                    nom: 'Pierron',
                    prenom: 'Thomas',
                    date_naissance: '05/01/1999',
                    avatarUrl: 'https://placekitten.com/g/64/64',
                    dernier_commentaire: 'lmsdfml',
                    nbSuper: 0,
                    idCouleur: 0,
                }
            ],
        }
    }

    handleClickProfil(i) {
        this.setState({id_select: i})
    }

    handleCompteSuper = (id_select) => {
        this.state.infoProfil[id_select].nbSuper = this.state.infoProfil[id_select].nbSuper + 1;
        this.setState(this.state.infoProfil.slice());
    }

    handleCouleur = (id_select) => {
        if (this.state.infoProfil[id_select].idCouleur < 8 ) {
            this.state.infoProfil[id_select].idCouleur = this.state.infoProfil[id_select].idCouleur + 1;
        } 
        else {
            this.state.infoProfil[id_select].idCouleur = 0;
        }
        this.setState(this.state.infoProfil.slice());
    }


    render() {
        

        return (
            <div>
                <Nav variant="tabs" defaultActiveKey="/home" >
                    <Nav.Item>
                        <Nav.Link onClick={() => this.handleClickProfil(0)}>Profil 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link onClick={() => this.handleClickProfil(1)}>Profil 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link onClick={() => this.handleClickProfil(2)}>Profil 3</Nav.Link>
                    </Nav.Item>
                </Nav>
                <div>
                    <Profil user={this.state.infoProfil[this.state.id_select]} numeroCouleur={this.handleCouleur}></Profil>
                    <Comment user={this.state.infoProfil[this.state.id_select]} compteSuper={this.handleCompteSuper}></Comment>
                </div>
            </div>
        )
    }
}

export default Navbar;