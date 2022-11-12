import React, {Component, useState} from "react";
import '../styles/App.css';

class App extends Component {

     
    render() {

        const relativeListItem =["vishal","vikas","harish"]

        const listItems = relativeListItem.map((items)=><li key={items}> {items}</li>)
        return(
            <div id="main">
               <ol key="relativeList">{listItems}</ol>
            </div>
        )
    }
}


export default App;
