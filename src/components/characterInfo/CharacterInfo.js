import { Component } from "react";
import PropTypes from 'prop-types';

import MarvelApiService from "../../services/MarvelApiService";
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';
import Skeleton from '../skeleton/Skeleton';

import './characterInfo.scss';

class CharacterInfo extends Component {
    state = {
        singleChar: null,
        loading: false,
        error: false
    }

    marvelApi = new MarvelApiService();

    componentDidUpdate(prevProps) {
        if (this.props.selectedChar !== prevProps.selectedChar ) {
            this.updateChar();
        }
    }

    updateChar = () => {
        const {selectedChar} = this.props;
        if (!selectedChar) {
            return;
        }  

        this.onUpdate();
        this.marvelApi
            .getCharacter(selectedChar)
                .then(this.onConfirmChar)
                .catch(this.onError)
    }

    onUpdate = () => {
        this.setState({
            loading: true
        })
    }

    onConfirmChar = (char) => {
        this.setState({
            singleChar: char,
            loading: false
        });
    }

    onError = () => {
        this.setState({
            loading: false,
            error: true
        })
    }

    render() {
        const {singleChar, loading, error} = this.state;

        const skeleton = loading || error || singleChar ? null : <Skeleton />;
        const spinner = loading ? <Spinner /> : null;
        const errorMessage = error ? <ErrorMessage /> : null;
        const char = !(spinner || errorMessage || !singleChar) ? <View char={singleChar} /> : null;
        return (
            <div className="character__detailed">
                {skeleton}
                {spinner}
                {errorMessage}
                {char}
            </div>
        )
    }
}

const View = ({char}) => {
    const {name, description, wiki, homepage, thumbnail, comics} = char;

    const imgStyle = thumbnail === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg' ? {objectFit:'contain'} : {objectFit: 'unset'};

    return (
        <>
            <div className="character__basics">
                <img src={thumbnail} alt="Abyss" style={imgStyle} />
                <div className="character__basics-wrapper">
                    <div className="character__name">{name}</div>
                    <div className="character__buttons">
                        <a href={homepage} className="button button__main">
                            <div className="inner">homepage</div>
                        </a>
                        <a href={wiki} className="button button__secondary">
                            <div className="inner">Wiki</div>
                        </a>
                    </div>
                </div>
            </div>

            <div className="character__descr">
                <p>
                    {description}
                </p>
            </div>

            <div className="character__comics">
                {comics.length > 0 ? (<div className="character__comics-title">Comics:</div>) : false}
                <ul className="character__comics-list">
                    {
                        comics.slice(0,10).map((item, i) => {
                            return (
                                <li className="character__comics-item" key={i}>
                                    <div className="character__comics-unit">
                                        {item.name}
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </>
    )
}

CharacterInfo.propTypes = {
    selectedChar: PropTypes.number
}

export default CharacterInfo;