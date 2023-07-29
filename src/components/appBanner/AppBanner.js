import Avengers from "../../resources/img/Avengers.jpeg";
import AvengersLogo from "../../resources/img/Avengers__logo.jpeg";

import "./appBanner.scss";

const Banner = () => {
    return (
        <div className="banner">
            <img src={Avengers} alt="Avengers" className='banner__bg-decoration' />
            <div className="banner__title">
                New comics every week!<br/>
                Stay tuned!
            </div>
            <img src={AvengersLogo} alt="Avengers Logo" className='banner__bg-logo' />
        </div>
    )
}

export default Banner;