import { useEffect, useState } from "react"
import axios from 'axios'
import { URL_SERVER } from "../config/database";

import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
const Table = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get(`${URL_SERVER}/product`).then(data => setData(data.data))
    }, [])

    return (
        <div className="container">
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Title</th>
                        <th scope="col">description</th>
                        <th scope="col">Price</th>
                        <th scope="col">Discount</th>
                        <th scope="col">Brand</th>
                        <th scope="col">Category</th>


                    </tr>
                </thead>
                <tbody>
                    {data.map((data,index) => {
                        return (
                            <tr key={index}>
                                <th scope="row">{data.id}</th>

                                <td> {data.title} </td>
                                <td> {data.description} </td>
                                <td> {data.price} </td>
                                <td> {data.discountPercentage} </td>
                                <td> {data.brand} </td>
                                <td> {data.category} </td>




                            </tr>

                        )
                    })}
                    
                </tbody>
            </table>
        </div>
    )
}

export default Table