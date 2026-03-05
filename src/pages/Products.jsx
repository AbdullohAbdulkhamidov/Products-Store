import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Products = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        getProducts()
    }, [])

    async function getProducts() {
        try {
            const response = await fetch('https://fakestoreapi.com/products')
            const data = await response.json()
            setProducts(data)
        }
        catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <div className="container">
                <h1 className='title'>Welcome to My Store</h1>

                <ul className="products-box">
                    {
                        products.map(p => {
                            return (
                                <li className='card' key={p.id}>
                                    <img src={`${p.image}`} alt={`${p.title}`} />
                                    <h2 className='card-title'>{p.title}</h2>
                                    <p>{p.price}</p>
                                    <Link to={`/products/${p.id}`}><button>View Details</button></Link>
                                </li>
                            )
                        })
                    }
                </ul>

                <Link to='/'><button style={{ marginTop: '1rem' }}>Go to Homepage</button></Link>
            </div>
        </>
    )
}

export default Products