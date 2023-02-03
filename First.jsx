import React from "react";
import Second from "./Second";
import Mycontext from "./Mycontext";
function First(){
    
    var details=React.useContext(Mycontext)
    return(
        <div className='border border-2 p-2 m-2'>
            <h1>First Component:{details.firstname}</h1>
            
        </div>
    )
}
export default First;