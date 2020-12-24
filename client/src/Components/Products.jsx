import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Product from './Product'
import {getAll} from '../Middleware/Product'

function Products() {
    const dispatch = useDispatch()

    const products = useSelector(state => state.product.product)

    useEffect(() => {
        dispatch(getAll())
    }, [])

    return (
        <div className='row' style={{ padding: '10px 0' }}>
            {
                products.map(item => <Product key={item._id} item={item}/>)
            }
        </div>
    )
}

export default Products
