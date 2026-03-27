import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { getProductById } from "../data/products"


export const Products =()=>{
const {id} = useParams()
const [products, setProduct] = useState(null)
const navigate = useNavigate()

useEffect(()=>{
const foundPrduct = getProductById(id)

if(!foundPrduct){
   navigate("/")
   return
}
setProduct(foundPrduct)
},[id])
if (!products) return <p>Loading...</p>

    return(
        <div className="page">
            <div className="container">
                <div className="product-detail">
                    <div className="product-detail-image">
                        <img src={products.image} alt={products.name} />
                        
                    </div>
                    <div className="product-detail-content">
                        <h1 className="product-detail-name">{products.name}</h1>
                        <p className="product-detail-price">${products.price}</p>
                        <p className="product-detail-description">{products.description}</p>
                        <button className="btn btn-primary">Add to cart</button>
                    </div>
                </div>
            </div>

        </div>
    )


}