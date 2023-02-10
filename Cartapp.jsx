import React from "react";
function Cartapp(props){
    function getTotal(){
      return  props.cart.reduce((t,p)=>{
            return t+(p.price*p.count)
        },0)
        
    }
    return(
        <div className="border border-4 p-2 border-danger ">
           <h2> Cart</h2>
            {
                props.cart.map((p)=>{
                    return<li className="d-flex flex-wrap justify-content-between">
                    <div className="w-50">{p.title}</div>
                    <div className="w-25 text-end">{p.count}*{p.price}</div>
                    <div className="w-25 text-end">{p.count*p.price}</div>
                    </li>    
                })
            }
            <hr/>
            <h4 style={{textAlign:'end'}}>Total:{getTotal()}</h4>
        </div>
    )
}
export default Cartapp