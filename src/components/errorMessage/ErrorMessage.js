import gif from '../errorMessage/error.gif';

const ErrorMessage = () => {
    return (
    <img src={gif} alt="Error" style={{display: 'block', margin: '0 auto', objectFit: 'contain', width: '250px', height: '250px'}} />
    );
}

export default ErrorMessage;