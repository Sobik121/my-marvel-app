import xMen from "../../resources/img/x-men.png";

import "./comicSingle.scss"


const Skeleton = () => {
    return (
        <div className="comic-single">
            <img src={xMen} alt="X-men" className="comic-single__poster" />
            <div className="comic-single__info">
                <h2 className="comic-single__title">X-Men: Days of Future Past</h2>
                <p className="comic-single__descr">Re-live the legendary first journey into the dystopian future of 2013 - where Sentinels stalk the Earth, and the X-Men are humanity's only hope...until they die! Also featuring the first appearance of Alpha Flight, the return of the Wendigo, the history of the X-Men from Cyclops himself...and a demon for Christmas!?</p>
                <p className="comic-single__descr">144 pages</p>
                <p className="comic-single__descr">Language: en-us</p>
                <div className="comic-single__price">9.99$</div>
            </div>
            <a href="#" className="comic-single__back">Back to all</a>
        </div>
    )
}

export default Skeleton;

