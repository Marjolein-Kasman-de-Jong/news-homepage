import './NavBar.css';
import menuIcon from '../../assets/icon-menu.svg';
import closeIcon from '../../assets/icon-menu-close.svg';
import MenuItem from '../MenuItem/MenuItem.jsx';
import menuItems from '../../constants/menuItems.js';

function NavBar({ menu, toggleMenu }) {
    return (
        <>
            <div className='backdrop' style={{ display: menu && 'flex' }}></div>

            <nav>
                <span className='menu-wrapper' onClick={(e) => { toggleMenu(!menu) }} >
                    <img className='menu-icon' src={menuIcon} alt="Menu icon" />
                </span>

                <ul className="menu-items" style={{ display: menu && 'flex' }}>
                    <span className='menu-wrapper' onClick={(e) => { toggleMenu(!menu) }}>
                        <img className='menu-icon' src={closeIcon} alt="Close icon" />
                    </span>

                    {menuItems.map((menuItem) => {
                        return (
                            <MenuItem key={menuItem} itemText={menuItem} />
                        )
                    })}
                </ul>
            </nav>
        </>
    );
}

export default NavBar;