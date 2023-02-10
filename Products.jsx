import React, { useEffect, useState } from "react";
import axios from "axios";
import Cartapp from "./Cartapp";
function Products(){
    var [products,setProduct]=useState([])
    var [cart,setCart]=useState([])
    useEffect(()=>{
        axios.get('https://fakestoreapi.com/products').then((res)=>{
        setProduct([...res.data])
        })
    },[])
    function addCart(a){
        setCart([...cart,{...a,count:1}])
    }
    function isTheProduct(a){
        var x=cart.find(function(cp){
            if(cp.title===a.title){
                return true
            }
            else{
                return false
            }
        })
        return x
    }
    function getCartProductCount(a){
        var x=cart.find(function(cp){
            if(cp.title===a.title){
                return true
            }
            else{
                return false
            }
        })
        return x?x.count:0
    }
    function decCount(a){
        var temp=cart.map((cp)=>{
            if(cp.title===a.title&&cp.count>0){
                cp.count=cp.count-1
            }
            return cp
        })
        setCart([...temp])
    }
    function incCount(a){
        var temp=cart.map((cp)=>{
            if (cp.title===a.title){
                cp.count=cp.count+1
            }
            return cp
        })
        setCart([...temp])
    }
    return(
       <div className="w-100 d-flex flex-wrap border border-2">
        <div className="w-50">
           <b className="text-info"> Welcome To Naa Web-site</b>
        {
            products.map((a)=>{
                return<div className="d-flex ">
                        <img src={a.image} width='100px' alt=''/>
                        <div className="p-4">
                         <h4 >{a.title}</h4>
                         <b>$ {a.price}</b>
                          {
                            isTheProduct(a) && (
                            <>
                            <button onClick={()=>{decCount(a)}}>-</button>
                            <b>{getCartProductCount(a)}</b>
                            <button onClick={()=>{incCount(a)}}>+</button>
                            </>)
                           }
                           <br/>
                           {
                            !isTheProduct(a) && (<button onClick={()=>{addCart(a)}}>Add to cart</button>)
                           }     
                        </div>
                    </div> 
            })  
        }
        </div>
        <div className="w-50 ">
            <Cartapp cart={cart}></Cartapp>
        </div>
       </div>
    )
}
export default Products