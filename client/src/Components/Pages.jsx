import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router-dom';
import { getAll } from '../Middleware/User';
import Create from './Create';
import Home from './Home';
import Login from './Login';
import Products from './Products';
import Register from './Register';

function Pages() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAll())
    })

    const isAuth = useSelector(state => state.user.isAuth)
    const isAdmin = useSelector(state => state.user.isAdmin)
    return (
        <div className="container" style={{marginTop: '50px'}}>
            <Switch>
                    {isAuth && <Route path='/home' exact component={Home}/>}
                    {isAuth && <Route path='/products' component={Products}/>}
                    {isAuth && isAdmin && <Route path='/create' component={Create}/>}
                    {isAuth && <Redirect to='/home'/>}
                    {!isAuth && <Route path='/login' exact component={Login}/>}
                    {!isAuth && <Route path='/register' component={Register}/>}
                    {!isAuth && <Redirect to='/login'/>}
            </Switch>
        </div>
    )
}

export default Pages
