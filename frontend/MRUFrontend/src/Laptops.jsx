import { useEffect, useState } from "react";
import axios from "axios";
import "./Laptops.css";

const Laptops = () => {
    const [laptops, setLaptops] = useState([]);

    const getLaptops = async () => {
        try {
            const res = await axios.get("http://localhost:9001/laptops");
            setLaptops(res.data);
        } catch (error) {
            console.error("Error fetching laptops:", error);
        }
    };

    useEffect(() => {
        getLaptops();
    }, []);

    return (
        <div className="parent">
            {laptops.map((element) => (
                <div key={element.id} className="child">
                    <img src={element.pimage} alt={element.pname} />
                    <h2>
                        <i className="fa fa-rupee"></i> {element.pcost}
                    </h2>
                    <p>Qty: {element.qty}</p>
                </div>
            ))}
        </div>
    );
};

export default Laptops;
