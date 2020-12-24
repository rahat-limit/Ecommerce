import React from 'react'
import { useSelector } from 'react-redux'

function Home() {
    const user = useSelector(state => state.user.user)
    return (
        <div>
            <h1 style={{fontFamily: 'Quicksand', marginBottom: '35px'}}>Welcome, <strong style={{fontSize: '37px'}}>{user.name}!!</strong></h1>
            <img className='main_image' src="https://a.radikal.ru/a35/1901/28/135f13a3761a.jpg" alt="MChr"/>
            <p style={{position: 'fixed', bottom: '0'}}>Info: <strong> zhayshilik@inbox.ru </strong></p>
        </div>
    )
}

export default Home
