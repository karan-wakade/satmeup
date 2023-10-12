import React, { Component } from "react";

class Passedtoapi extends Component {
  constructor(props) {
    super(props);

    this.state = {
      url: this.props.url,
      info: null,
      above: [],
    };
  }

  componentDidMount() {
    fetch(this.state.url)
      .then((response) => response.json())
      .then((data) => {
        this.setState({ info: data.info }, () =>
          console.log("info updated in state\n" + data.info)
        );
        this.setState({ above: data.above }, () =>
          console.log("above updated in state\n" + data.above)
        );
      })
      .catch((error) => console.log(error));
  }

  render() {
    const { above } = this.state.above;
    return (
      <div>
        <ul>{above}</ul>
      </div>
    );
  }
}

export default Passedtoapi;
