import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ProductDetail = () => {
    const { pid } = useParams()
    const [product, setProduct] = useState(null)
    useEffect(() => {
        fetch('http://localhost:8080/api/products/' + pid, {
            headers: {
                'Authorization': localStorage.getItem('auth-token-app')
            }
        })
            .then(res => {
                return res.json()
            })
            .then(data => {
                console.log(data)
                if (data.status == 500) {
                    console.error('Error 500: Internal Server Error')
                }
                else if (data.status == 404) {
                    console.error('Error 404: product not found')
                }
                else {
                    setProduct(data.product)
                }
            })
    }, [])
    return (
        <>
            <h1>
                El detalle del producto: {pid} </h1>
            {!product ? <h2>Cargando...</h2> : <Product {...product} />}

        </>
    )
}


const Product = ({ descripcion, precio, stock, nombre }) => {
    return (
        <div>
            <h1>{nombre}</h1>
            <span>{precio}</span>
            <span>{stock}</span>
            <p> {descripcion}</p>
        </div>
    )
}


export default ProductDetail