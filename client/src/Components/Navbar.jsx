import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { getAll } from '../Middleware/User';
import { removeError } from '../Redux/errorReducer';

function Navbar() {
    const dispatch = useDispatch()
    const logout = () => {
        try {
            dispatch(removeError())

            localStorage.removeItem('token')
        } catch (e) {}
    }

    useEffect(() => {
        dispatch(getAll())
    })

    const isAuth = useSelector(state => state.user.isAuth)
    const isAdmin = useSelector(state => state.user.isAdmin)

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-secondary" style={{padding: '10px 20px'}}>
            <div className="container-fluid d-flex">
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    {isAuth && 
                        <li className="nav-item">
                        <Link className="nav-link" style={{fontSize: '1.5rem', color: '#fff', margin: '0 20px'}} aria-current="page" to="/">Home</Link>
                        </li>
                    }
                    {isAuth && 
                        <li className="nav-item">
                        <Link className="nav-link" style={{fontSize: '1.5rem', color: '#fff', margin: '0 20px'}} aria-current="page" to="/products">Products</Link>
                        </li>
                    }
                    {isAdmin && 
                        <li className="nav-item">
                        <Link className="nav-link" style={{fontSize: '1.5rem', color: '#fff', margin: '0 20px'}} aria-current="page" to="/create">Create</Link>
                        </li>
                    }
                    {isAuth && 
                        <li className="nav-item" onClick={() => logout()}>
                        <a className="nav-link" style={{fontSize: '1.5rem', color: '#fff', margin: '0 20px'}} aria-current="page" href="/">Logout</a>
                        </li>
                    }
                    {!isAuth &&     
                        <li className="nav-item">
                        <Link className="nav-link" style={{fontSize: '1.5rem', color: '#fff', margin: '0 20px'}} aria-current="page" to="/login">Login</Link>
                        </li>
                    }
                    {!isAuth && 
                        <li className="nav-item">
                        <Link className="nav-link" style={{fontSize: '1.5rem', color: '#fff', margin: '0 20px'}} aria-current="page" to="/register">Register</Link>
                        </li>
                    }
                </ul>
                </div>
                <a className="navbar-brand" style={{fontSize: '1.7rem', fontWeight: '600', color: '#fff', fontFamily: 'Space Grotesk', }} href="/">Shop</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
            </div>
        </nav>
    )
}

export default Navbar
