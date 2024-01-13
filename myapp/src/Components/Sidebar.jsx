import React, { useEffect, useState } from 'react'
import {useSearchParams} from "react-router-dom"

export const Sidebar = () => {
    const [category,setCategory] = useState([])
    const [searchParams , setSearchParams] = useSearchParams()
    const handleChange=(e)=>{
        let newcategory = [...category]
        const value = e.target.value

        if(newcategory.includes(value)){
            newcategory = newcategory.filter((el)=>el!==value)
        }
        else{
            newcategory.push(value)
        }

        setCategory(newcategory)
    }

    useEffect(()=>{
        const params={
            category,
        }
        setSearchParams(params)
    },[category])
    // console.log(category)
    return (
        <>
            <div>
                <h3>Filter By</h3>
                <div>
                    <label>
                        <input type="checkbox" onChange={handleChange} value="Mens"/>
                        Men
                    </label>
                </div>
                <div>
                    <label>
                        <input type="checkbox" onChange={handleChange} value="Women"/>
                        Women
                    </label>
                </div>
                <div>
                    <label>
                        <input type="checkbox"  onChange={handleChange} value="Kids"/>
                        Kids
                    </label>
                </div>
            </div>

        </>
    )
}
