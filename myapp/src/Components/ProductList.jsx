import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { getProduct } from '../Redux/ProductReducer/action'
import { ProductCard } from './ProductCard'
import styled from 'styled-components'
import { useSearchParams } from 'react-router-dom'
export const ProductList = () => {
    const [searchParams] = useSearchParams()
    const dispatch = useDispatch()
    const { products } = useSelector((store) => store.productReducer)

    console.log(searchParams.getAll('category'))

    let obj = {
        params:{
            category: searchParams.getAll('category'),
            _sort: searchParams.get('order') && "price",
            _order: searchParams.get('order')
        }
    }
    useEffect(() => {
        dispatch(getProduct(obj))
    }, [searchParams])

    console.log(products)
    return (
        <>
            <DIV>
                {
                    products?.map((el) => {
                        return <ProductCard key={el.id} {...el} />
                    })
                }
            </DIV>

        </>
    )
}


const DIV = styled.div`
    display: grid;
    grid-template-columns: repeat(3,1fr);
    gap: 1vh;
`