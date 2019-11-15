import React from 'react';
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
                    prenom: 'Cyril',
                    date_naissance: '05/01/1999',
                    avatarUrl: 'https://st2.depositphotos.com/1007566/12304/v/950/depositphotos_123041444-stock-illustration-avatar-man-cartoon.jpg',
                    dernier_commentaire: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur',
                    nbSuper: 0,
                    idCouleur: 0,
                },
                {
                    id: '1',
                    nom: 'Martin',
                    prenom: 'Lucie',
                    date_naissance: '12/12/1980',
                    avatarUrl: 'https://image.freepik.com/vecteurs-libre/personnage-avatar-femme-affaires_24877-18285.jpg',
                    dernier_commentaire: 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.',
                    nbSuper: 0,
                    idCouleur: 0,
                },
                {
                    id: '2',
                    nom: 'Renaud',
                    prenom: 'Fred',
                    date_naissance: '04/11/2000',
                    avatarUrl: 'https://previews.123rf.com/images/yupiramos/yupiramos1710/yupiramos171005754/87676342-jeune-homme-noir-avatar-caract%C3%A8re-vector-illustration-design.jpg',
                    dernier_commentaire: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga',
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
        const compteur = this.state.infoProfil[id_select].nbSuper + 1
        const profil = this.state.infoProfil

        profil[id_select].nbSuper = compteur
        this.setState(profil)
    }

    handleCouleur = (id_select) => {
        const profil = this.state.infoProfil
        if (this.state.infoProfil[id_select].idCouleur < 8 ) {
            const compteur = this.state.infoProfil[id_select].idCouleur + 1
            profil[id_select].idCouleur = compteur
        } 
        else {
            profil[id_select].idCouleur = 0
        }
        this.setState(profil)
    }


    render() {
        

        return (
            <div>
                <Nav variant="tabs" className="justify-content-end" >
                    <Nav.Item>
                        <Nav.Link onClick={() => this.handleClickProfil(0)}>{this.state.infoProfil[0].prenom}</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link onClick={() => this.handleClickProfil(1)}>{this.state.infoProfil[1].prenom}</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link onClick={() => this.handleClickProfil(2)}>{this.state.infoProfil[2].prenom}</Nav.Link>
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