import React from "react";
import IndividualCard from "./IndividualCard";
import "./styles.css"

export default function CardList(props){

    return(
            // Container for all the cards, info will come from state we set in CardSearcher 
            <div>
                
                
                {
                    
                    props.results.map((result, i) => {

                        return <IndividualCard
                            key={i}
                            image={result.volumeInfo.imageLinks.smallThumbnail}
                            title={result.volumeInfo.title}
                        />
                    }       

                    )// end props.results.map()

                }

            </div>

        
        
    );// end return()
    
}// end SearchBox()