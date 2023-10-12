import React, { Component } from "react";
import Passedtoapi from "./passedtoapi";

class Passthrouguhlocation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      //   url: null,
      observer_lat: null,
      observer_lng: null,
      observer_alt: null,
      search_radius: null, //0-90
      category_id: null,
    };

    // this.generateurl = this.generateurl.bind(this);
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position);
      this.setState({ observer_lat: position.coords.latitude }, () =>
        console.log("latitude set to " + position.coords.latitude)
      );
      this.setState({ observer_lng: position.coords.longitude }, () =>
        console.log("longitude set to " + position.coords.longitude)
      );
      //   this.setState({ observer_alt: position.coords.altitude }, () =>
      //     console.log("alitutude set to " + position.coords.altitude)
      //   );
      this.setState({ observer_alt: 0 }, () =>
        console.log("alitutude set to " + 0)
      );
      this.setState({ search_radius: 90 }, () =>
        console.log("search radius set to " + 90)
      );
      this.setState({ category_id: 10 }, () =>
        console.log("category set to " + 10)
      );
      //   this.setState(
      //     {
      //       url:
      //         "https://api.n2yo.com/rest/v1/satellite/above/" +
      //         this.state.observer_lat +
      //         "/" +
      //         this.state.observer_lng +
      //         "/" +
      //         this.state.observer_alt +
      //         "/" +
      //         this.state.search_radius +
      //         "/" +
      //         this.state.category_id,
      //     },
      //     () => console.log("url set to " + this.state.url)
      //   );
    });
  }

  //   generateurl = () => {
  //     this.setState(
  //       {
  //         url:
  //           "https://api.n2yo.com/rest/v1/satellite/above/" +
  //           this.state.observer_lat +
  //           "/" +
  //           this.state.observer_lng +
  //           "/" +
  //           this.state.observer_alt +
  //           "/" +
  //           this.state.search_radius +
  //           "/" +
  //           this.state.category_id,
  //       },
  //       () => console.log("url set to " + this.state.url)
  //     );
  //   };

  render() {
    // this.generateurl();
    // const { url } = this.state;
    const url =
      "https://api.n2yo.com/rest/v1/satellite/above/" +
      this.state.observer_lat +
      "/" +
      this.state.observer_lng +
      "/" +
      this.state.observer_alt +
      "/" +
      this.state.search_radius +
      "/" +
      this.state.category_id;
    return <Passedtoapi url={url} />;
  }
}

export default Passthrouguhlocation;
