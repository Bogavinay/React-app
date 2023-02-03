import React, { useEffect, useState} from "react";
import axios from "axios";
function Countries(){
    var[countries, setCountries]=useState([])
    useEffect(()=>{
        axios.get("https://restcountries.com/v2/all").then((res)=>{
            
            setCountries([...res.data])
        })
    },[])
    return(
        <div>
            <h1>countries</h1>
            <div className="d-flex flex-wrap">
                {
                    countries.map((country)=>{
                        return(
                            <div className="w-25">
                                <div className="m-2 border border-2 p-2">
                                    <b>{country.name}</b>
                                    <img src={country.flag} width='100%'alt='' />
                                    </div>
                                    </div> 
                        )
                    })
                }
            </div>
        </div>
    )
}
export default Countries