import { Link } from 'react-router-dom';
import './Navigation.css';

const navItems = ({ display, margin, cancel, column, show, cancelShow, showOrder }) => {
    return (
    <ul style={{listStyle: 'none', display}}>
        <Link to='/' style={{ margin, textDecoration: 'none', color:'white', marginRight: '10px',  column }} 
            onClick={cancel}>Shop</Link>
        <li onMouseLeave={cancelShow} style={{ textDecoration: 'none', color:'white', margin }} onClick={show}>Orders</li>
        {showOrder && <div className='order'>
           <Link to='/order' style={{ textDecoration: 'none', color:'#fff', margin, display }} onClick={cancel}>bananaOrders</Link>
           <Link to='/apple_order' style={{ textDecoration: 'none', color:'#fff', margin, display }} onClick={cancel}>AppleOrders</Link>
           <Link to='/orange_order' style={{ textDecoration: 'none', color:'#fff', margin, display }} onClick={cancel}>OrangeOrders</Link>
           <Link to='/watermelon_orders' style={{ textDecoration: 'none', color:'#fff', margin, display }} onClick={cancel}>WatermelonOrders</Link>
           <Link to='/strawberry_orders' style={{ textDecoration: 'none', color:'#fff', margin, display }} onClick={cancel}>StrawberryOrders</Link>
        </div>}
        <Link to='/developer' style={{ textDecoration: 'none', color:'white' }} onClick={cancel}>Developer</Link>
    </ul>
)};

export default navItems;