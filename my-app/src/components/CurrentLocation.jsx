import React, { Component } from "react";
import { render } from "react-dom";


class CurrentLocation extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(function(position) {
      console.log(position)
    });
  }

  render() {
    return (
      <div>
        <h4>Using geolocation JavaScript API in React</h4>
      </div>
    );
  }
}

render(<CurrentLocation />, document.getElementById("root"));
    
    
 
export default CurrentLocation;