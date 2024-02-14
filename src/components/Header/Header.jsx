import './Header.css';
import Logo from '../Logo/Logo';
import NavBar from '../NavBar/NavBar';

function Header({menu, toggleMenu}) {
    return (
        <header>
            <Logo />
            <NavBar menu={menu} toggleMenu={toggleMenu} />
        </header>
    );
}

export default Header;