import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const ProductCard = ({image,title,price,color,discount,category,id}) => {
  return (
    <>
        <DIV>
            <img src={image} alt="" />
            <h3>{title}</h3>
            <h3>Price: ${price}</h3>
            <p>Color: {color}</p>
            <p>Discount: {discount}%</p>
            <p>Category: {category}</p>
            <button>
              <Link to={`/edit/${id}`}>Edit</Link>
            </button>
        </DIV>
    </>
  )
}


const DIV = styled.div`
    border: 1px solid grey;
    padding: 10px;
    width: 300px;
    margin-top: 5vh;
    margin-left: 1.5vw;

    img{
        width: 100%;
        height: 200px;
    }
`
