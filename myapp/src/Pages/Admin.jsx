import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { addProduct } from '../Redux/ProductReducer/action'

const initState = {
    image:"",
    title:"",
    price:"",
    color:"",
    discount:"",
    category:""
}

export const Admin = () => {
    const [product, setProduct] = useState(initState)
    const dispatch = useDispatch()

    const handleChange =(e)=>{
        e.preventDefault()
        const {name,value} = e.target

        setProduct((prev)=>{
            return {...prev, [name]:value}
        })
    }

    const handleClick=(e)=>{
        e.preventDefault()
        dispatch(addProduct(product))
        setProduct(initState)
    }
    
  return (
    <>
        <DIV>
            <h2>Add Product</h2>
            <form>
                <input type="text" name="image" value={product.image} onChange={(e)=>{handleChange(e)}} placeholder='Image' />
                <input type="text" name="title" value={product.title} onChange={(e)=>{handleChange(e)}} placeholder='Title' />
                <input type="text" name="price" value={product.price} onChange={(e)=>{handleChange(e)}} placeholder='Price' />
                <input type="text" name="color" value={product.brand} onChange={(e)=>{handleChange(e)}} placeholder='Color' />
                <input type="text" name="discount" value={product.discount} onChange={(e)=>{handleChange(e)}} placeholder='Discount' />
                <select name="gender" onChange={(e)=>{handleChange(e)}}>
                    <option value="">Select Gender</option>
                    <option value="Mens">Male</option>
                    <option value="Womens">Female</option>
                    <option value="Kids">Kids</option>
                </select>
                <button onClick={handleClick} type='submit'>Submit</button>
            </form>
        </DIV>
    
    </>
  )
}


const DIV = styled.div`
width: 60vh;
margin: 40px auto;
border: 1px solid grey;
padding: 10px;

    form{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 15px;
    }

    input{
        width: 95%;
        height: 40px;
        font-size: medium;
    }

    select{
        width: 95%;
        height: 40px;
        font-size: medium;
    }

    button{
        width: 30%;
        height: 40px;
    }
`
