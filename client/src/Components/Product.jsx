import Axios from 'axios'
import React from 'react'
import { useSelector } from 'react-redux'
import {Link, useHistory} from 'react-router-dom'

function Product({item}) {
    const isAdmin = useSelector(state => state.user.isAdmin)
    const isAuth = useSelector(state => state.user.isAuth)
    const history = useHistory()

    const deleteItem = async (e) => {
        try {
            await Axios.delete(`http://localhost:5000/api/products/product/${item._id}`)
                .then(res => {
                    if (res) {
                        history.push('/products')
                    }
                })
        } catch (e) {

        }
    }

    return (
        <div className="card card_item" style={{width: '18rem', margin: '8px 10px'}}>
            <img src={item.images} className="card-img-top" alt={item.productId} />
            <div className="card-body">
                <h5 className="card-title" style={{paddingBottom: '10px'}}>{item.name}</h5>
                <p className="card-text price">{item.price} тг.</p>
                {isAuth && <Link to={`/detail/${item._id}`} style={{color: 'white'}} className="btn btn-info">Buy</Link>}
                {isAdmin &&<a href="/" onClick={() => deleteItem()} style={{marginLeft: '10px'}} className='btn btn-danger'>Delete</a>}
            </div>
        </div>
    )
}

export default Product
