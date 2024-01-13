import React from 'react'
import { ProductList } from '../Components/ProductList'
import { Sidebar } from '../Components/Sidebar'
import styled from 'styled-components'

export const Homepage = () => {
  return (
    <>
      <DIV>
        <div className='sidebar'>
          <Sidebar />
        </div>
        <div className='productList'>
          <ProductList />
        </div>
        
      </DIV>
    </>
  )
}

const DIV = styled.div`
  display: flex;
  flex-direction: row;

  .sidebar{
    width: 15%;
    border-right: 1px solid grey;
    padding: 30px;
  }

  .productList{
    width:85%
  }
`