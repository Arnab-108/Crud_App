import React, { useState } from 'react'
import styled from 'styled-components'

const initState = {
    image:"",
    title:"",
    price:"",
    brand:"",
    discount:"",
    gender:""
}

export const Admin = () => {
    const [product, setProduct] = useState(initState)

    const handleChange =(e)=>{
        e.preventDefault()
        const {name,value} = e.target

        setProduct((prev)=>{
            return {...prev, [name]:value}
        })
    }

    const handleClick=(e)=>{
        e.preventDefault()
        console.log(product)
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
                <input type="text" name="brand" value={product.brand} onChange={(e)=>{handleChange(e)}} placeholder='Brand' />
                <input type="text" name="discount" value={product.discount} onChange={(e)=>{handleChange(e)}} placeholder='Discount' />
                <select name="gender" onChange={(e)=>{handleChange(e)}}>
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="kids">Kids</option>
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
