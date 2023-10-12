import React, { Component } from "react";

class Locationtest extends Component {
  constructor(props) {
    super(props);

    this.state = {
      latitude: null,
      longitude: null,
    };
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position);
      this.setState({ latitude: position.coords.latitude }, () =>
        console.log("latitude set to " + position.coords.latitude)
      );
      this.setState({ longitude: position.coords.longitude }, () =>
        console.log("longitude set to " + position.coords.longitude)
      );
    });
  }

  render() {
    const { latitude, longitude } = this.state;
    return (
      <div>
        <h3>latitude : {latitude}</h3>
        <h3>longitude : {longitude}</h3>
      </div>
    );
  }
}

export default Locationtest;
