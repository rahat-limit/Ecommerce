import Axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { removeCart, setCart } from '../Redux/cartReducer'
import { setError } from '../Redux/errorReducer'
import { setProduct } from '../Redux/productReducer'

function Cart({props}) {
    const dispatch = useDispatch()

    let history = useHistory()

    const [count, setCount] = useState(1)

    const cartProduct = async () => {
        try {
            await Axios.get(`http://localhost:5000/api/products/product/${props.match.params.id}`)
                .then(res => {
                    if (res) {
                        console.log(res.data.product)
                        dispatch(setCart(res.data.product))
                    }
                })
                .catch(err => {
                    dispatch(setError(err.response.data.msg))
                })
        } catch (e) {}
    }

    useEffect(() => {
        cartProduct()
    }, [])

    if (count < 1) {
        setCount(1)
    }

    const product = useSelector(state => state.cart.users)

    const [price, setPrice] = useState(++product.price)
    const [message, setMessage] = useState('')

    const onHandleSuccess = () => {
        setMessage('Successfully paid')
    }

    useEffect(() => {
        setPrice(product.price * count)
    }, [count])

    useEffect(() => {
        if (message) {
            setTimeout(() => {
                setMessage('')
                history.push('/')
            }, 2000)
        }
    }, [message])

    return (
        <div>
            <h1 style={{textAlign: 'center'}}>Cart</h1>
            <>
                <div className='cart__block'>
                    <img src={product.images} alt={product._id}/>
                    <span>
                        <h4>{product.name}</h4>
                        <h5>{product.category}</h5>
                    </span>
                    <div className='counter'>
                        <div className='counter__dec counter__button' onClick={() => setCount(count - 1)}><p>-</p></div>
                        <p>{count}</p>
                        <div className='counter__inc counter__button' onClick={() => setCount(count + 1)}><p>+</p></div>
                    </div>
                    <div className='cart_price price'>{price} тг.</div>
                </div>
                <button className='success_button' onClick={() => onHandleSuccess()}>Оплатить</button>
                {
                message && 
                <div className="alert alert-success" style={{marginTop: '10px'}} role="alert">
                    {message}
                </div>
                }
            </>
        </div>
    )
}

export default Cart
