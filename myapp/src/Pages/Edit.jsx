import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import styled from 'styled-components'
import { patchProduct } from '../Redux/ProductReducer/action'

export const Edit = () => {
  const {id} = useParams()
  const [data,setData] = useState("")
  const product = useSelector((store)=>store.productReducer.products)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  console.log(product)

  const handleChange=(e)=>{
    const {name,value} = e.target
    setData(prev => {
      return {...prev , [name]:value}
    })
  }

  const handleSubmit=(e)=>{
    e.preventDefault()
    console.log(data)
    dispatch(patchProduct(data,id)).then((res)=>{
      alert("Edit Successfull!")
      navigate("/")
    })
  }
  useEffect(()=>{
    const data = product.find((el)=> el.id === +id)
    setData(data)
    console.log(data)
  },[])
  return (
    <>
      <DIV>
        <h3>Edit Product: {id}</h3>
          <form onSubmit={handleSubmit}>
            <input type="text" name="title" onChange={handleChange} value={data.title}  />
            <input type="text" name="image" onChange={handleChange} value={data.image} />
            <input type="number" name="price" onChange={handleChange} value={data.price}  />
            <input type="text" name="color" onChange={handleChange} value={data.color} />
            <input type="number" name="discount" onChange={handleChange} value={data.discount} />
            <select name="category" onChange={handleChange} value={data.category}>
                <option value="">Select Gender</option>
                <option value="Mens">Male</option>
                <option value="Womens">Female</option>
                <option value="Kids">Kids</option>
            </select>
            <button type='submit'>Edit</button>
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
