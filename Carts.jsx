import React, { useEffect, useState } from "react";
import axios from "axios";
function Carts(){
    var[carts,setCarts]=useState([])
    useEffect(()=>{
        axios.get('https://fakestoreapi.com/carts').then((res)=>{
            setCarts([...res.data])
        })
    },[])
    return(
        <div>
            <h1>Carts</h1>
            <h1></h1>
            <div>
                {
                    carts.map((b)=>{
                        return(
                            <div>
                                <ul>
                                    <li>{b.id}</li>
                                    <p>{b.date}</p>
                                    
                                </ul>
                                <p>{b.products.quantity}</p>
                            </div>  
                        )
                    })
                }
            </div>
        </div>
    )
}
export default Carts;