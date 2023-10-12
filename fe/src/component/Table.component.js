import { useEffect, useState } from "react"
import axios from 'axios'
import { URL_SERVER } from "../config/database";
const Table = () => {
    const [data,setData] = useState([]);
    console.log(data);
    useEffect(()=>{
        axios.get(`${URL_SERVER}/student`).then(data => setData(data.data))
    },[])

    return (
        <div><ul>{data.map((data,index) => {
            return (
                <li key={index}>{data.name} - {data.gender}</li>
            )
        })}</ul></div>
    )
}

export default Table