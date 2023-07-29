import { Component } from "react";
import PropTypes from 'prop-types';

import MarvelApiService from "../../services/MarvelApiService";
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';

import "./characterList.scss";

class CharacterList extends Component {
    state = {
        charList: [],
        loading: true,
        error: false,
        offset: 1544,
        disabled: false,
        endedChars: null
    }

    marvelApi = new MarvelApiService();

    componentDidMount() {
        this.onRequestListChars();
    }

    onGroupAllCards = (list) => {
        this.setState(({charList, offset}) => ({
            charList: [...charList, ...list],
            loading: false,
            endedChars: list.length < 9 ? true : false,
            disabled: false,
            offset: offset + charList.length
        }));
    }

    onRequestListChars = (offset) => {
        this.onUpdateDisabled();
        this.marvelApi
            .getAllCharacters(offset)
                .then(this.onGroupAllCards)
                .catch(this.onUpdateError)
    }

    onUpdateDisabled = () => {
        this.setState({
            disabled: true
        })
    }

    onUpdateLoading = () => {
        this.setState({
            loading: true
        })
    }

    onUpdateError = () => {
        this.setState({
            loading: false,
            error: true
        })
    }

    refArr = []

    takeRef = (node) => {
        this.refArr.push(node);
    }

    selectedChar = (id) => {
        this.refArr.forEach(item => {
            item.classList.remove('character__item_selected');
        })
        this.refArr[id].classList.add('character__item_selected');

    }

    tabHelper = (e, id, charId) => {
        if (e.code === 'Enter') {
            this.props.onGetId(charId);
            this.selectedChar(id);
        }
    }

    onRenderAllCards() {
        const {charList} = this.state;

        const elements = charList.map((item, i) => {
            const {id, name, thumbnail} = item;

            return (
                <li ref={this.takeRef} className="character__item" tabIndex={0} onKeyDown={(e) => this.tabHelper(e, i, id)} key={id} onClick={() => {this.props.onGetId(id); this.selectedChar(i)}}>
                    <img src={thumbnail} alt={name} />
                    <div className="character__name">{name}</div>
                </li>
            )
        })
        return (
            <ul>
                {elements}
            </ul>
        )
    }
    

    render() {

    const {charList, loading, error, disabled, offset, endedChars} = this.state;

    const items = this.onRenderAllCards(charList);

    const spinner = loading ? <Spinner /> : null,
          errorMessage = error ? <ErrorMessage /> : null,
          chars = !(spinner || errorMessage) ? items: null;  

    return (
        <div className="character__content">
            {errorMessage}
            {spinner}
            {chars}
            <button 
                className="button button__main button__long"
                disabled={disabled} 
                onClick={() => {this.onRequestListChars(offset)}}
                style={{visibility: endedChars ? 'hidden' : 'visible'}}>
                <div className="inner">Load More</div>
            </button>
        </div>
    )}
}

CharacterList.propTypes = {
    onGetId: PropTypes.func
}

export default CharacterList;