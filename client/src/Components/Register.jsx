import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux';
import { removeError, setError } from '../Redux/errorReducer';

function Register() {
    const history = useHistory()
    const dispatch = useDispatch()
    const user = {
        email: '',
        name: '',
        password1: '',
        password2: ''
    }

    const [data, setData] = useState(user)

    const error = useSelector(state => state.error.error)

    const handleChange = text => e => {
        setData({...data, [text]: e.target.value })
    }

    const { email, name, password1, password2 } = data;

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

    const submitHandler = async (e) => {
        try {   
            e.preventDefault()
            await axios.post('http://localhost:5000/api/users/register', data)
                .then(res => {
                    if (res) {
                        history.push('/login')
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
            <h1 style={{padding: '5px', textAlign: 'center', fontSize: '3.5em'}}>Register</h1>
            <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder='Email' value={email} name='email' onChange={handleChange('email')} aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
            </div>
            <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder='Name' value={name} name='name' onChange={handleChange('name')} aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
            </div>
            <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder='Password' value={password1} name='password1' onChange={handleChange('password1')} aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
            </div>
            <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder='Confirm Password' value={password2} name='password2' onChange={handleChange('password2')} aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
            </div>
            <button type="submit" className="btn btn-outline-success">Sign Up</button>
            <button type="button" onClick={() => history.push('/login')} className="btn btn-outline-primary" style={{marginLeft: '20px'}}>Sign In</button>
            {error &&
            <div className="alert alert-danger" style={{marginTop: '10px'}} role="alert">
                {error}
            </div>
            }
        </form>
    )
}

export default Register
