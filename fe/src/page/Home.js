import { useEffect, useState } from "react"
import Table from "../component/Table.component"
import axios from "axios";
import { URL_SERVER } from "../config/database";

const Home = () => {
    const [search, setSearch] = useState('');
    console.log(search);

    const [brand, setBrand] = useState([]);
    useEffect(() => {
        axios.get(`${URL_SERVER}/brand`).then(data => setBrand(data.data))
    }, [])

    return (
        <div className="container">
            <div className="row">
                <div className="col-4">
                    <div className="category">
                        <h2>Filter</h2>
                        {brand.map((category,index) => {
                            return (
                                <div className="form-check" key={index}>
                                    <input className="form-check-input" type="radio" name="category" id={category.id}/>
                                        <label className="form-check-label" for={category.id}>
                                            {category.name}
                                        </label>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className="col-8">
                    <h1 className="text-center">List of product </h1>
                    <input type="text" placeholder="Enter title to search" onChange={(e) => setSearch(e.target.value)}></input>
                    <Table />
                </div>
            </div>
        </div>
    )
}
export default Home