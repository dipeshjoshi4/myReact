import { React, useState } from 'react'
import "./product.css"
import Data from "./Data/Data.js";

const Products = () => {

    const [productItem, setProductItem] = useState(Data)
    const handleFilter = () => {
        const filterItem = productItem.filter((item) => {
            return (
                item.price > 100
            )
        })
        setProductItem(filterItem)
    }

    const [rating, setRating] = useState(Data)
    const handleFilterRate = () => {
        const ratingItem = productItem.filter((item) => {
            return (
                item.rating > 2
            )
        })
        setProductItem(ratingItem)
    }



    return (
        <div>
            <p className='filter' onClick={handleFilter}>Filter by Price</p>
            <p className='filter' onClick={handleFilterRate}>Filter by rate</p>


            <div className='cart'>
                {
                    productItem.map((product) => {
                        return (

                            <div className='product' key={product.id}>
                                <div className='product-image'>
                                    <img src={product.thumbnail} alt="" />
                                </div>

                                <div className="product-details">
                                    <p className="product-title">{product.title}</p>
                                    <p className="product-price">₹{product.price}</p>
                                    <p className="product-rating">{product.rating}</p>
                                </div>
                                <button>Add</button>
                            </div>

                        )
                    })
                }
            </div>
        </div>
    )
}

export default Products