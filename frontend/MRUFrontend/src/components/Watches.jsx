

import { useEffect, useState } from "react";
import "./Laptops.css";
import axios from "axios";
const Watches = ()=>{
    const [watches,setWatches] = useState([]);
    const get_watches = async ()=>{
        const res = await axios.get("http://localhost:9001/watches");
        const {data} = res;
        setWatches(data);
    }
    useEffect(()=>{
        get_watches();
    },[]);
    
    return(
        <>
        <h1>Available Watches</h1>
            <div className="parent">
                {watches.map((element)=>{
                    return(
                        <div className="child">
                            <h2>{element.watch1}</h2>
                            <img src={element.pimage}></img>
                            <h2>&#8377;  {element.pcost}</h2>
                            <p>Qty: {element.pqyt}</p>
                        </div>
                    )
                })}
            </div>
        </>
    )
}
export default Watches;
