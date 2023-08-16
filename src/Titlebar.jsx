import React from "react";
import "./Titlebar.css"

function Titlebar(Props){
    return(
        <>
            <div className='heading'>
                <h1>{Props.title}</h1>
            </div>
        </>

    );
}
export default Titlebar;