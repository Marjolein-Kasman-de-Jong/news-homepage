import './MenuItem.css';

function MenuItem({itemText}) {
    return (
        <li className='menu-item'>
            {itemText}
        </li>
    );
}

export default MenuItem;