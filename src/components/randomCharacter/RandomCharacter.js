import { Component } from 'react';
import MarvelApiService from '../../services/MarvelApiService';
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';

import Mjolnir from "../../resources/img/mjolnir.png";


import "./randomCharacter.scss";


class RandomCharacter extends Component {
    state = {
        character: {},
        loading: true,
        error: false
    }

    marvelApi = new MarvelApiService();

    componentDidMount() {
        this.randomChar();
    }

    onCharLoading = (character) => {
        this.setState({
            loading: false,
            character: character
        })
    }

    onUpdate = () => {
        this.setState({
            loading: true
        })
    }

    onError = () => {
        this.setState({
            loading: false,
            error: true
        })
    }

    randomChar = () => {
        const id = Math.floor(Math.random() * (1011400 - 1011000) + 1011000);
        this.onUpdate();
        this.marvelApi
            .getCharacter(id)
                .then(this.onCharLoading)
                .catch(this.onError);
    }


    render() {
        const {character, loading, error} = this.state;

        const spinner = loading ? <Spinner /> : null,
              errorMessage = error ? <ErrorMessage /> : null,
              char = !(spinner || errorMessage) ? <ViewChar character={character}/> : null;  

        return (
            <div className="randomchar">
                {errorMessage} 
                {spinner}
                {char}
                <div className="randomchar__getanother">
                    <div className="randomchar__title">
                        Random character for today!<br/>
                        Do you want to get to know him better?
                    </div>

                    <div className="randomchar__title">
                        Or choose another one
                    </div>

                    <button className="button button__main" onClick={(e) => {e.preventDefault(); this.randomChar()}}>
                        <div className="inner">Try It</div>
                    </button>

                    <img src={Mjolnir} alt="Mjolnir" className="randomchar__decphoto" />
                </div>
            </div>
        )
    }
}

const ViewChar = ({character}) => {
    const {name, description, wiki, homepage, thumbnail} = character;

    return (
        <div className="randomchar__block">
            <img src={thumbnail} alt="Thor" style={thumbnail === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg' ? {objectFit:'contain'} : {objectFit: 'unset'}} />
            <div className="randomchar__info">
                <div className="randomchar__name">
                    {name}
                </div>
                <div className="randomchar__descr">
                    {description}
                </div>
                <div className="randomchar__buttons">
                    <a href={homepage} className="button button__main">
                        <div className="inner">homepage</div>
                    </a>
                    <a href={wiki} className="button button__secondary">
                        <div className="inner">Wiki</div>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default RandomCharacter;