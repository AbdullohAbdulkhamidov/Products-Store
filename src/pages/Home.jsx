import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <>
            {/* <div className="container"> */}
                <div className="container">
                    <h1 className='title'>Welcome to My Store</h1>

                    <Link to='/products'><button>Go to Products</button></Link>
                </div>
            {/* </div> */}
        </>
    )
}

export default Home