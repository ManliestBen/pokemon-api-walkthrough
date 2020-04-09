import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './PokemonPage.css';
import { getPokemonDetails } from '../../services/pokemon-api';


class PokemonPage extends Component {
    state = {
        pokemon: []
    }

    async componentDidMount() {
        const pokemon = await getPokemonDetails(parseInt(this.props.match.params.idx)+1)
        console.log(pokemon)
    }

    render() {
        return (
            <div className='PokemonPage'>
                PokemonPage
            </div>
        )
    }
}

export default PokemonPage;