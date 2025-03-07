import { useEffect, useState } from "react";
import "./Laptops.css";
import axios from "axios";
const Mobiles = ()=>{
    const [mobiles,setMobiles] = useState([]);
    const get_mobiles = async ()=>{
        const res = await axios.get("http://localhost:9001/mobiles");
        const {data} = res;
        setMobiles(data);
    }
    useEffect(()=>{
        get_mobiles();
    },[]);
    
    return(
        <>
        <h1>Available Mobiles</h1>
            <div className="parent">
                {mobiles.map((element,index)=>{
                    return(
                        <div className="child">
                            <h2>{element.pname}</h2>
                            <img src={element.pimage}></img>
                            <h2>&#8377;  {element.pcost}</h2>
                            <p>Qty: {element.pqty}</p>
                        </div>
                    )
                })}
            </div>
        </>
    )
}
export default Mobiles;
