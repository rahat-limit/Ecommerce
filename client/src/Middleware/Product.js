import axios from 'axios'
import { setProduct } from '../Redux/productReducer'

export const getAll = () => {
    return async dispatch => {
        try {
            await axios.get('http://localhost:5000/api/products/product')
            .then(res => {
                dispatch(setProduct(res.data.products))
            })
        } catch (e) {
    
        }
    }
}   
