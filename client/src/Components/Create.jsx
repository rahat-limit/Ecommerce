import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { removeError, setError } from '../Redux/errorReducer';
import axios from 'axios'
import { setProduct } from '../Redux/productReducer';

function Create() {
    const dispatch = useDispatch()
    const history = useHistory()
    const user = {
        productId: '',
        name: '',
        price: '',
        description: '',
        images: '',
        category: ''
    }
    const [data, setData] = useState(user)
    const error = useSelector(state => state.error.error)

    const { productId, name, price, description, images, category } = data;

    const handleChange = text => e => {
        setData({...data, [text] : e.target.value})
    }

    useEffect(() => {
        if (error) {
            if (error === 'jwt malformed') {
                dispatch(removeError(error))
            }
            setTimeout(() => {
                dispatch(removeError(error))
            }, 2000)
        }
    })

    const submitHandler = async e => {
        try {
            e.preventDefault()

            await axios.post('http://localhost:5000/api/products/product', data)
                .then(res => {
                    if (res) {
                        dispatch(setProduct(res.data.product))
                        history.push('/products')
                    }
                })
                .catch(err => {
                    dispatch(setError(err.response.data.msg))
                })

        } catch (e) {}
    }
    return (
        <form onSubmit={submitHandler}>
            <h1 style={{padding: '5px', textAlign: 'center', fontSize: '3.5em'}}>Register</h1>
            <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder='ProductId' value={productId} name='productId' onChange={handleChange('productId')} aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
            </div>
            <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder='Name' value={name} name='name' onChange={handleChange('name')} aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
            </div>
            <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder='Price' value={price} name='price' onChange={handleChange('price')} aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
            </div>
            <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder='Description' value={description} name='description' onChange={handleChange('description')} aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
            </div>
            <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder='Image' value={images} name='images' onChange={handleChange('images')} aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
            </div>
            <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder='Category' value={category} name='category' onChange={handleChange('category')} aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
            </div>
            <button type="submit" className="btn btn-outline-success">Create</button>
            <button type="button" onClick={() => history.push('/products')} className="btn btn-outline-primary" style={{marginLeft: '20px'}}>View</button>
            {error &&
            <div className="alert alert-danger" style={{marginTop: '10px'}} role="alert">
                {error}
            </div>
            }
        </form>
    )
}

export default Create
