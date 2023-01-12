import React from "react";
import button from "./styles.css"


export default function SearchBox(props){

    return(
                 
            <form className="SearchBox" onSubmit={props.inputBoxInput} action="">
                <p>Enter your search</p>
                <input onChange={props.inputHandler} type="text"></input>
                <button type="submit" style={button}>Search</button>
            </form>

        
        
    );// end return()
    
}// end SearchBox()