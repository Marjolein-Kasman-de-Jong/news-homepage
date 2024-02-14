import './Logo.css';
import logoImg from '../../assets/logo.svg';

function Logo() {
    return (
        <span className='logo-wrapper'>
            <img className='logo' src={logoImg} alt="Company logo" />
        </span>
    );
}

export default Logo;