import React from 'react'

function Product({item}) {
    return (
        <div className="card" style={{width: '18rem'}}>
            <img src={item.images} className="card-img-top" alt={item.productId} />
            <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">{item.description}</p>
                <a href="/" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    )
}

export default Product
