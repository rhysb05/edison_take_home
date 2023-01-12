import React, {Component} from "react";
import SearchBox from "./SearchBox";
import CardList from "./CardList";

class CardSearcher extends Component {

    // Constructor assigns the initial state to our CardHolder
    constructor(props){

        super(props);{

            this.state = {

                results : [],
                searchInput: '', // Hold the state of the application when we are adding to input box

            }// end this.state = {}

        }// end super(props)

    }// end constructor()

    // Method to handle user input, why are these arrow functions so popular?
    inputHandler = (userInput) => {

        console.log(userInput.target.value); // log whatever value is being stored
        this.setState({searchInput : userInput.target.value}); // grab user input when user presses enter

    }// end inputHandler = ()

    inputBoxInput = (event) => {

        event.preventDefault(); // Prevent this method from submitting a form since we used a form for our search field
        // let queryString = "https://www.googleapis.com/books/v1/volumes?q=search+terms";
        let queryString = "https://www.googleapis.com/books/v1/volumes?q=";
        let querySettings = "&startIndex=0&maxResults=40";
        console.log(queryString + this.state.searchInput);
        fetch(queryString + this.state.searchInput + querySettings).then((response) => {

                if (response.ok){

                    return response.json()
                    .then( json => {
                        // setState is asynchronous, we can use the callback method to call the 
                        // console.log method only after the new state has actually been set.
                        // I just wanted to see how to accurately report this change to the console.
                        this.setState({results : Object.values(json.items)}, () => {console.log(this.state);}) 
                    })
                    .catch((error) =>{

                        console.log(error)
                    });

                }
            })

    }// end inputBoxInput


    render() {


        return(

            <div className="CardHolder">
                <SearchBox inputBoxInput={this.inputBoxInput} inputHandler={this.inputHandler}/>
                <CardList results={this.state.results}/> 
            </div>

        );// end return

    }// end render()


}// end class App extends Component

export default CardSearcher;