import React, { Component } from "react";

export class Advapicalltest extends Component {
  constructor(props) {
    super(props);

    this.state = {
      url: null,
      observer_lat: null,
      observer_lng: null,
      observer_alt: null,
      search_radius: null, //0-90
      category_id: null,

      /*
      category: null, //	string	Category name (ANY if category id requested was 0)
      transactionscount: null, //	integer	Count of transactions performed with this API key in last 60 minutes
      satcount: null, //	integer	Count of satellites returned
      satid: null, //	integer	Satellite NORAD id
      intDesignator: null, //	string	Satellite international designator
      satname: null, //	string	Satellite name
      launchDate: null, //	string	Satellite launch date (YYYY-MM-DD)
      satlat: null, //	float	Satellite footprint latitude (decimal degrees format)
      satlng: null, //	float	Satellite footprint longitude (decimal degrees format)
      satalt: null, //	float	Satellite altitude (km)
      */
      //  apicalldata: null,
      info: null,
      above: [],
    };
  }

  // https://api.n2yo.com/rest/v1/satellite/above/41.702/-76.014/0/70/18/&apiKey=589P8Q-SDRYX8-L842ZD-5Z9

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
      this.setState(
        {
          url:
            "https://api.n2yo.com/rest/v1/satellite/above/" +
            this.state.observer_lat +
            "/" +
            this.state.observer_lng +
            "/" +
            this.state.observer_alt +
            "/" +
            this.state.search_radius +
            "/" +
            this.state.category_id,
        },
        () => console.log("category set to " + 10)
      );
    });
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

export default Advapicalltest;
