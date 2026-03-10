import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Products = (props) => {
    const products = props.products

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
                                    <p><b>Amount:</b> {p.price}</p>
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