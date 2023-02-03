import React from "react";
function Iplteam(props){
   
return(
    <div className="betterview">
        <h1>{props.tname}</h1>
        {
            props.team.map((a)=>{
                return<li>{a}</li>
            })
        }
        {/* {
            players2.map((b)=>{
                return<li>{b}</li>
            })
        } */}
    </div>
)
    }
export default Iplteam;