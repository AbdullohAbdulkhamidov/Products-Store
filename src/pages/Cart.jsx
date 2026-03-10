import { Link } from 'react-router-dom'

const Cart = ({ cart, removeFromCart }) => {
    let sum = 0
    cart.map(p => sum += p.price * p.quantity)

    return (
        <>
            <div className="container">
                <h1 className='title'>Your Cart</h1>

                <ul className="products-box">
                    {
                        cart.map(p => {
                            return (
                                <li className='card' key={p.id}>
                                    <img src={`${p.image}`} alt={`${p.title}`} />
                                    <h2 className='card-title'>{p.title}</h2>
                                    <p><b>Price:</b> {p.price}</p>
                                    <p><b>Amount:</b> {p.quantity}</p>
                                    <button onClick={() => removeFromCart(p)}>Remove</button>
                                </li>
                            )
                        })
                    }
                </ul>

                <center>
                    {cart.length==0 ? <p>Cart is empty</p> : ''} 
                    {cart.length==0 ? <Link to='/products'><button>Go to Products</button></Link> : <button>Total: {sum}</button>} 
                </center>
            </div>
        </>
    )
}

export default Cart