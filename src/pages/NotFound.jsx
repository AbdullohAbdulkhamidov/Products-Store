import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <>
            <div className="container">
                <div className="container">
                    <h1 className='title'>Oops, Page not Found!</h1>

                    <Link to='/'><button>Go to Homepage</button></Link>
                </div>
            </div>
        </>
    )
}

export default NotFound