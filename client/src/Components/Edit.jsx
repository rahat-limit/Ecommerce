import Axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { setError } from '../Redux/errorReducer';

function Edit({props}) {
    const [product, setProduct] = useState([])
    const isAdmin = useSelector(state => state.user.isAdmin)
    // const history = useHistory()

    const dispatch = useDispatch()

    const editProduct = async () => {
        try {
            await Axios.get(`http://localhost:5000/api/products/product/${props.match.params.id}`)
                .then(res => {
                    if (res) {
                        setProduct(res.data.product)
                    }
                })
                .catch(err => {
                    dispatch(setError(err.response.data.msg))
                })
        } catch (e) {}
    }

    useEffect(() => {
        editProduct()   
    }, []) 

    return (
        <>
            <div className='detail__page'>
                <img src={product.images} alt={product._id} />
                <div className='detail__options'>
                    <h1>{product.name}</h1>
                    <h2>Description:</h2>
                    <br/>
                    <p className='detail__description'>{product.description}</p>
                    <table style={{width: '100%'}}>
                        <thead>
                            <tr>
                                <th>Price:</th>
                                <th>Sold:</th>
                                <th>View:</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{product.price} тг.</td>
                                <td>{product.sold}</td>
                                <td>0</td>
                            </tr>
                        </tbody>
                    </table>
                    <div className='info'>
                    <p><strong>Ваш регион:</strong> Нур-Султан</p>

                    <p><strong>Доставка:</strong> ориентировочно 28 декабря</p>
                    </div>
                    <div className="detail_buttons">
                        <button type='button' className='add__cartButton'><Link to={`/cart/${product._id}`}>Добавить в корзину</Link></button>
                        {isAdmin && <Link to={`/edit/${props.match.params.id}`} className="add__cartButton">Редактировать</Link>}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Edit
