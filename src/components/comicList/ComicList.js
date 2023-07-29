import { Component } from "react";
import MarvelApiService from "../../services/MarvelApiService";

import UW from "../../resources/img/UW.png";

import "./comicList.scss"

class ComicList extends Component {

    marvelApi = new MarvelApiService();

    componentDidMount() {
        this.listChar();
    }

    listChar = () => {
        this.marvelApi
            .getAllCharacters()
                .then(console.log)
    }
    
    render() {

    return (
        <div className="comic-list">
            <div className="comic-list__wrapper">
                <ul className="comic-list__content">
                    <li className="comic-list__item">
                        <img src={UW} alt="UW" className="comic-list__item-photo" />
                        <div className="comic-list__item-title">ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB</div>
                        <div className="comic-list__item-price">9.99$</div>
                    </li>
                    <li className="comic-list__item">
                        <img src={UW} alt="UW" className="comic-list__item-photo" />
                        <div className="comic-list__item-title">ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB</div>
                        <div className="comic-list__item-price">9.99$</div>
                    </li>
                    <li className="comic-list__item">
                        <img src={UW} alt="UW" className="comic-list__item-photo" />
                        <div className="comic-list__item-title">ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB</div>
                        <div className="comic-list__item-price">9.99$</div>
                    </li>
                    <li className="comic-list__item">
                        <img src={UW} alt="UW" className="comic-list__item-photo" />
                        <div className="comic-list__item-title">ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB</div>
                        <div className="comic-list__item-price">9.99$</div>
                    </li>
                    <li className="comic-list__item">
                        <img src={UW} alt="UW" className="comic-list__item-photo" />
                        <div className="comic-list__item-title">ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB</div>
                        <div className="comic-list__item-price">9.99$</div>
                    </li>
                    <li className="comic-list__item">
                        <img src={UW} alt="UW" className="comic-list__item-photo" />
                        <div className="comic-list__item-title">ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB</div>
                        <div className="comic-list__item-price">9.99$</div>
                    </li>
                    <li className="comic-list__item">
                        <img src={UW} alt="UW" className="comic-list__item-photo" />
                        <div className="comic-list__item-title">ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB</div>
                        <div className="comic-list__item-price">9.99$</div>
                    </li>
                    <li className="comic-list__item">
                        <img src={UW} alt="UW" className="comic-list__item-photo" />
                        <div className="comic-list__item-title">ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB</div>
                        <div className="comic-list__item-price">9.99$</div>
                    </li>
                </ul>
            </div>
            <button className="button button__main button__long">
                <div className="inner">Load More</div>
            </button>
        </div>
    )}
}

export default ComicList;