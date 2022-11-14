import React, {Component, useState} from "react";
import '../styles/App.css';

class App extends Component {

     
    render() {

        const relativeListItem =["vishal","vikas","harish"]

        const listItems = relativeListItem.map((items,i)=><li key={`relativeListItem${i+1}`}> {items}</li>)
        return(
            <div id="main">
               <ol key="relativeList">{listItems}</ol>
            </div>
        )
    }
}


export default App;
