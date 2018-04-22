import { default as React, Component } from 'react'
document.body.style.backgroundColor = "#f2f2f2";

class Intro extends Component {
  render() {
    return (
      <div>
        <center>
          <h2 style={{margingTop: 20+'em'}}>Welcome to Genie</h2>
          Help Keep Our Earth Clean!
          <br/>
          Login, then select any event from the map
        </center>
      </div>
    )
  }
}

export default Intro;
