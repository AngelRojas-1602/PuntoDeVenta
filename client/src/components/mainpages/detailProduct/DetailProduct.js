import React, {useContext, useState, useEffect} from 'react'
import {useParams, Link} from 'react-router-dom'
import {GlobalState} from '../../../GlobalState'
import ProductItem from '../utils/productItem/ProductItem'


function DetailProduct() {
    const params = useParams()
    const state = useContext(GlobalState)
    const [products] = state.productsAPI.products
    const addCart = state.userAPI.addCart
    const [detailProduct, setDetailProduct] = useState([])

    useEffect(() =>{
        if(params.id){

            products.forEach(product => {
                if(product._id === params.id) setDetailProduct(product)
            })
        }
    },[params.id, products])

    if(detailProduct.length === 0) return null;

    return (
        <>
            <div className="detail">
                <img src={detailProduct.images.url} alt="" />
                <div className="box-detail">
                    <div className="row">
                        <h2>{detailProduct.title}</h2>
                    </div>
                    <span>$ {detailProduct.price}</span>
                    <p>Stock Disponible</p>
                    <a href={detailProduct.content} className="btn btn-warning btn-lg">Compar en Mercado Libre</a>
                    <Link to="/cart" className="btn btn-primary btn-lg"
                    onClick={() => addCart(detailProduct)}>
                        Añadir Al Carrito
                    </Link>
                    <p className="des">Descripcion</p>
                    <p className="des-txt">{detailProduct.description} </p>
                </div>
            </div>

            <div>
                <h2>Productos Relacionados</h2>
                <div className="products">
                    {
                        products.map(product => {
                            return product.category === detailProduct.category 
                                ? <ProductItem key={product._id} product={product} /> : null
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default DetailProduct
