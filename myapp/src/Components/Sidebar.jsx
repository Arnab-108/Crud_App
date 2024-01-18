import React, { useEffect, useState } from 'react'
import { useSearchParams } from "react-router-dom"

export const Sidebar = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    const initialCategory = searchParams.getAll("category")
    const initialOrder = searchParams.get("order")
    const [category, setCategory] = useState(initialCategory || [])
    const [order,setOrder] = useState(initialOrder || "")
    const handleChange = (e) => {
        let newcategory = [...category]
        const value = e.target.value

        if (newcategory.includes(value)) {
            newcategory = newcategory.filter((el) => el !== value)
        }
        else {
            newcategory.push(value)
        }

        setCategory(newcategory)
    }

    const handleSort=(e)=>{
        setOrder(e.target.value)
    }

    useEffect(() => {
        const params = {
            category,
        }

        order && (params.order = order)
        setSearchParams(params)
    }, [category,order])
    // console.log(category)
    return (
        <>
            <div>
                <h3>Filter By</h3>
                <div>
                    <label>
                        <input type="checkbox" onChange={handleChange} value="Mens" checked = {category.includes("Mens")}/>
                        Men
                    </label>
                </div>
                <div>
                    <label>
                        <input type="checkbox" onChange={handleChange} value="Women" checked = {category.includes("Women")} />
                        Women
                    </label>
                </div>
                <div>
                    <label>
                        <input type="checkbox" onChange={handleChange} value="Kids" checked = {category.includes("Kids")} />
                        Kids
                    </label>
                </div>
            </div>
            <br />
            <br />
            <h3>Sort by Price:</h3>
            <div onChange={handleSort}>
                <div>
                    <label>
                        <input type="radio" name='order' value={"asc"} defaultChecked={order === "asc"}/>
                        ASC
                    </label>
                </div>
                <div>
                    <label>
                        <input type="radio" name='order' value={"desc"} defaultChecked={order=== "desc"}/>
                        DESC
                    </label>
                </div>
            </div>

        </>
    )
}
