import React from "react";
import div from "./styles.css"

export default function IndividualCard(props){

    // Probably a better way to do this
    const timeStamp = Date.now();

    const handleClick = (event) => {
        
        // Search for the book we clicked on
        let searchString = "https://www.google.com/search?q=" + props.title;
        window.location.assign(searchString)

    }// end handleClick

    const handleDontTouch = (event) => {
        
        // Search for the book we clicked on
        window.open("https://www.youtube.com/watch?v=qyUnSuYYs18")
        alert("Don't touch me.")

    }// end handleDontTouch

    return(
                
            // Actual card that we will make with the props being passed into it from the CardSearcher
            <div  style={{border : "5px solid black", width : 500, textAlign: "center", margin: "auto"}}>
                <div onClick={handleClick} style={{border : "5px solid red"}}>
                    <img src={props.image} alt="Missing book cover"/>
                    <p>{props.title}</p>
                    <p>{new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' }).format(timeStamp)}</p>
                </div>
                <button onClick={handleDontTouch}>Don't Touch Me</button>
            </div>
        
    );// end return()
    
}// end SearchBox()