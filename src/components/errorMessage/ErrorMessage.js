import './errorMessageStyles.scss';

const img = require('./error.gif');

const ErrorMessage = () => {
    return(
        <img className='img' src={img} alt='Error'/>
    )
}

export default ErrorMessage;