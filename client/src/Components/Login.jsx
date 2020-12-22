import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../Redux/userReducer';
import { removeError, setError } from '../Redux/errorReducer';

function Login() {
    const history = useHistory()
    const dispatch = useDispatch()
    const user = {
        email: '',
        password: ''
    }

    const [data, setData] = useState(user)

    const error = useSelector(state => state.error.error)

    const handleChange = text => e => {
        setData({...data, [text]: e.target.value })
    }

    useEffect(() => {
        if (error) {
            if (error === 'jwt malformed') {
                dispatch(removeError())
            }
            setTimeout(() => {
                dispatch(removeError())
            }, 2000)
        }
    })
    
    const { email, password } = data;

    const submitHandler = async (e) => {
        try {   
            e.preventDefault()
            await axios.post('http://localhost:5000/api/users/login', data)
                .then(res => {
                    if (res) {
                        console.log(res)
                        dispatch(setUser(res.data.user))

                        localStorage.setItem('token', res.data.token)

                        history.push('/')
                    }
                })
                .catch(err => {
                    dispatch(setError(err.response.data.msg))
                })
            
        } catch (e) {

        }
    }
    return (
        <form onSubmit={submitHandler}>
            <h1 style={{padding: '5px', textAlign: 'center', fontSize: '3.5em'}}>Login</h1>
            <div className="input-group mb-3">
                <input type="text" className="form-control" value={email} placeholder='Email' name='email' onChange={handleChange('email')} aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
            </div>
            <div className="input-group mb-3">
                <input type="text" className="form-control" value={password} placeholder='Password' name='password' onChange={handleChange('password')} aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
            </div>
            <button type="submit" className="btn btn-outline-success">Sign In</button>
            <button type="button" onClick={() => history.push('/register')} className="btn btn-outline-primary" style={{marginLeft: '20px'}}>Sign Up</button>
            {error &&
            <div className="alert alert-danger" style={{marginTop: '10px'}} role="alert">
                {error}
            </div>
            }
        </form>
    )
}

export default Login
