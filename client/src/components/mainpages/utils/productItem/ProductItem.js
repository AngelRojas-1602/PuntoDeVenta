import React from 'react'
import BtnRender from './BtnRender'

function ProductItem({product, isAdmin, deleteProduct, handleCheck}) {

    return (
        <div className="product_card">
            {
                isAdmin && <input type="checkbox" checked={product.checked}
                onChange={() => handleCheck(product._id)} />
            }
            <div class="card_product">
                <img src={product.images.url} class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title" title={product.title}>{product.title}</h5>
                    <span>${product.price}</span>
                </div>
                <BtnRender product={product} deleteProduct={deleteProduct} />
            </div>
        </div>
    )
}

export default ProductItem
