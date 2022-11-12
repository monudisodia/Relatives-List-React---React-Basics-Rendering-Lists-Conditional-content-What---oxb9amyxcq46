import React, {Component, useState} from "react";
import '../styles/App.css';

class App extends Component {
    render() {

        return(
            <div id="main">
               {/* Do not remove the main div */}
               <ol key="relativeList">
                <li key={relativeListItem1}></li>
                <li key={relativeListItem2}></li>
                <li key={relativeListItem3}></li>
               </ol>
            </div>
        )
    }
}


export default App;
