import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <nav className='navbar'>
                <ul className='nav-ul'>
                    <Link to='/'><li>Home</li></Link>
                    <Link to='/products'><li>Products</li></Link>
                    <Link to='/cart'><li>Cart</li></Link>
                </ul>
            </nav>
        </>
    )
}

export default Navbar