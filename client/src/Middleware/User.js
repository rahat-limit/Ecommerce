import axios from 'axios';
import { setError } from '../Redux/errorReducer';
import { setUser } from '../Redux/userReducer';

export const getAll = () => {
    return async dispatch => {
        try {
            await axios.get('http://localhost:5000/api/users/getUser', { headers: { authorization: localStorage.getItem('token') } })
            .then(res => {
                dispatch(setUser(res.data.user))

                localStorage.setItem('token', res.data.token)
            })
            .catch(err => {
                dispatch(setError(err.response.data.msg))
            })
        } catch (e) {}
}}