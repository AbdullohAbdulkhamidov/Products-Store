import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const ProductDetails = () => {
    const { id } = useParams()
    const [product, setProduct] = useState([])

    useEffect(() => {
        getProduct()
    }, [])

    async function getProduct() {
        try {
            const response = await fetch(`https://fakestoreapi.com/products/${id}`)
            const product = await response.json()
            setProduct(product)
        }
        catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <div className="container">
                <h1 className='title'>Product Details</h1>

                <div className="product-container">
                    <div class="product-image">
                        <img src={`${product.image}`} alt="Product Poster" />
                    </div>

                    <div class="product-content">
                        <h1>{product.title}</h1>

                        <h3>Price</h3>
                        <p>{product.price}</p>

                        <h3>Description</h3>
                        <p>{product.description}</p>
                    </div>
                </div>

                <Link to='/products'><button>Go to Products</button></Link>
            </div>
        </>
    )
}

export default ProductDetails