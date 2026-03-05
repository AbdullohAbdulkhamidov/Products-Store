import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <nav>
                <ul className='nav-ul'>
                    <Link to='/'><li>Home</li></Link>
                    <Link to='/products'><li>Products</li></Link>
                </ul>
            </nav>
        </>
    )
}

export default Navbar