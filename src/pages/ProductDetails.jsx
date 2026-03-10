import { useEffect, useState } from 'react'
import axios from "axios"
import { Link, useParams } from 'react-router-dom'

const ProductDetails = ({addToCart}) => {
    const { id } = useParams()
    const [product, setProduct] = useState([])

    useEffect(() => {
        getProduct()
    }, [])

    // async function getProduct() {
    //     try {
    //         const response = await fetch(`https://fakestoreapi.com/products/${id}`)
    //         const product = await response.json()
    //         setProduct(product)
    //     }
    //     catch (error) {
    //         console.log(error)
    //     }
    // }

    async function getProduct() {
        try {
            const response = await axios.get(`https://fakestoreapi.com/products/${id}`)
            const product = await response.data
            setProduct(product)
        }
        catch (error) {
            console.log(error)
        }
    }

    const [productAmount, setProductAmount] = useState(1)
    function addOne() {
        if (productAmount < 20) {
            setProductAmount(productAmount + 1)
        }
    }

    function subtractOne() {
        if (productAmount > 1) {
            setProductAmount(productAmount - 1)
        }
    }

    function handleAdd() {
        addToCart(product, productAmount)
        setProductAmount(1)
        const statusText = document.querySelector('.statusText') 
        statusText.innerHTML = `${productAmount} products added successfully`
    }

    return (
        <>
            <div className="container">
                <h1 className='title'>Product Details</h1>

                <div className="product-container">
                    <div className="product-image">
                        <img src={`${product.image}`} alt="Product Poster" />
                    </div>

                    <div className="product-content">
                        <h1>{product.title}</h1>

                        <h3>Price</h3>
                        <p>{product.price}</p>

                        <h3>Description</h3>
                        <p>{product.description}</p>

                        <div className="add-to-cart">
                            <span className="small-btn" onClick={subtractOne}>-</span>
                            <button className='small-btn product-amount'>{productAmount}</button>
                            <span className="small-btn" onClick={addOne}>+</span>
                            <button className='add-to-cart' onClick={(handleAdd)}>Add to Cart</button>
                        </div>

                        <p className='statusText'></p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductDetails