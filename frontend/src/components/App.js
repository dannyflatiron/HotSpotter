import React from "react";
import "../App.css";
import { connect } from "react-redux";
import { Map, Marker, GoogleApiWrapper, InfoWindow } from "google-maps-react";
import { getCurrentUser } from "../actions/users/currentUser.js";
import {
  getLocations,
  setLocations,
  setLocationMarker,
} from "../actions/locations/getlocations.js";
import NavBar from "./NavBar.js";
import Review from "./Review.js";
import Home from "./Home.js";
import Login from "./Login.js";
import Signup from "./Signup.js";
// import NewReview from "./NewReviewForm.js";
import ReviewButton from "./ReviewButton.js";
import { Router, Route } from "react-router-dom";
import history from "../history";
import mapStyles from "../mapStyles.js";
import NewReviewForm from "./NewReviewForm.js";
import InfoWindowEx from "./InfoWindowEx.js";
import { Provider } from "react-redux";
import { store } from "../index.js";

class App extends React.Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
  };

  componentDidMount() {
    this.props.getCurrentUser();
    this.props.getLocations();
  }

  onMarkerClick = (props, marker, e) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
    }, () => {
      const currentMarker= {
        location: this.state.selectedPlace.location,
        name: this.state.selectedPlace.name,
        ssid: this.state.selectedPlace.ssid,
        type: this.state.selectedPlace.type
      }
      this.props.setLocationMarker(currentMarker)
    });
  };

  onMapClicked = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null,
      });
    }
  };

  render() {
    const loggedIn = this.props.loggedIn;
    const containerStyle = {
      width: "100%",
      height: "100vh",
    };
    const center = {
      lat: 40.678177,
      lng: -73.94416,
    };
    const options = {
      disableDefaultUI: true,
    };

    return (
      <div className='App'>
        <h1>
          HotSpotter <span>📶 </span>
        </h1>

        <Map
          google={this.props.google}
          onClick={this.onMapClicked}
          zoom={12}
          mapContainerStyle={containerStyle}
          initialCenter={center}
          styles={mapStyles}
          disableDefaultUI={true}>
          {this.props.locations.map((location) => {
            return (
              <Marker
                key={location.objectid}
                icon={{ url: require("../wifiSignal.svg") }}
                position={{ lat: location.latitude, lng: location.longitude }}
                onClick={this.onMarkerClick}
                name={location.name}
                type={location.type}
                ssid={location.ssid}
                location={location.location}></Marker>
            );
          })}
          <InfoWindowEx
            onClose={this.onInfoWindowClose}
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}>
            <React.Fragment>
              <div>
                <p className='infoWindow'>
                  SSID: {this.state.selectedPlace.ssid}
                </p>
                <p className='infoWindow'>
                  Type: {this.state.selectedPlace.type}
                </p>
                <p className='infoWindow'>
                  Location: {this.state.selectedPlace.location}
                </p>
                <Provider store={store}>
                  <NewReviewForm />
                  <Review/>
                </Provider>
              </div>
            </React.Fragment>
          </InfoWindowEx>
        </Map>
        <Router history={history}>
          {loggedIn ? <NavBar /> : <Home />}
          <Route path='/login' exact component={Login} />
          <Route path='/signup' exact component={Signup} />
          <Route path='/reviews' exact component={Review} />
          <Route path='/reviews/new' exact component={NewReviewForm} />
          <Route path='/navbar' exact component={NavBar} />
        </Router>
      </div>
    );
  }
}

const mapStateToProps = ({ currentUser, locations, locationMarker }) => {
  // console.log("mapStateToProps", locationMarker);
  return {
    loggedIn: !!currentUser,
    locationMarker,
    locations,
  };
};

const LoadingContainer = (props) => (
  <div class='wrap'>
    <div class='loading'>
      <div class='bounceball'></div>
      <div class='text'>NOW LOADING</div>
    </div>
  </div>
);

const WrappedContainer = GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_KEY,
  LoadingContainer: LoadingContainer,
})(App);

export default connect(mapStateToProps, {
  getCurrentUser,
  getLocations,
  setLocationMarker,
})(WrappedContainer);
