import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Product from './Product'
import {getAll} from '../Middleware/Product'

function Products() {
    const dispatch = useDispatch()

    let issues;

    const products = useSelector(state => state.product.product)

    useEffect(() => {
        dispatch(getAll())
    }, [issues])

    return (
        <div>
            {
                products.map(item => <Product key={item._id} item={item}/>)
            }
        </div>
    )
}

export default Products
