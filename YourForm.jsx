import React from "react";
function YourForm(props,a){
    return(
        <div>
            <h1>Your Form</h1>
            <input type="text" ref={a}/>
        </div>
    )
}
export default React.forwardRef(YourForm)