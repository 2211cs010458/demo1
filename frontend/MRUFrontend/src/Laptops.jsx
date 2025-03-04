import axios from "axios";
import { useEffect, useState } from "react";
const Laptops = ()=>{
    const [laptops,setLaptops] = useState([]);
    const get_laptops = async ()=>{
        const res = await axios.get("http://localhost:9001/laptops");
        const {data} = res;
        setLaptops(data);
    };
    useEffect(()=>{
        get_laptops();
    },[]);
    return(
        <>
            <p>{JSON.stringify(laptops)}</p>
        </>
    )
}
export default Laptops;