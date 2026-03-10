import { Link } from 'react-router-dom'

const Navbar = ({ cart }) => {
    return (
        <>
            <nav className='navbar'>
                <ul className='nav-ul'>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/products'>Products</Link></li>
                    <li>
                        <Link to='/cart'>
                            Cart 
                            <sup style={{ backgroundColor: cart.length>0 ? 'red' : 'coral' }}>{cart.length ? cart.length : ''}</sup>
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar