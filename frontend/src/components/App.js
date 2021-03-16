import React from "react";
import "../App.css";
import { connect } from "react-redux";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";
import { getCurrentUser } from "../actions/users/currentUser.js";
import {
  getLocations,
  setLocationMarker,
} from "../actions/locations/getlocations.js";
import { getReviewedMarkers, getMarker, clearMarker } from "../actions/reviews/getReviewedMarkers.js";
import NavBar from "./NavBar.js";
import Home from "./Home.js";
import Login from "./Login.js";
import Signup from "./Signup.js";
import { Router, Route } from "react-router-dom";
import history from "../history";
import mapStyles from "../mapStyles.js";
import NewReviewForm from "./NewReviewForm.js";
import InfoWindowEx from "./InfoWindowEx.js";
import LocationReviews from "./location-review";
import { Provider } from "react-redux";
import { store } from "../index.js";

class App extends React.Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
    readReviews: false,
  };

  componentDidMount() {
    this.props.getCurrentUser();
    this.props.getLocations();
    this.props.getReviewedMarkers();

  }

  onMarkerClick = (props, marker, e) => {
    this.setState(
      {
        selectedPlace: props,
        activeMarker: marker,
        showingInfoWindow: true,
        readReviews: false
      },
      async () => {
        const currentMarker = {
          objectid: this.state.selectedPlace.objectid,
          location: this.state.selectedPlace.location,
          name: this.state.selectedPlace.name,
          ssid: this.state.selectedPlace.ssid,
          type: this.state.selectedPlace.type,
        };
        await this.props.setLocationMarker(currentMarker);

        // check if current selected marker has any reviews
        // if it does then fire getMarker action to update Redux store state value for reviewedMarker
        let existingReviewedMarker = this.props.reviewedMarkers.find(reviewedMarker => reviewedMarker.object_id === currentMarker.objectid)
        existingReviewedMarker ? this.props.getMarker(this.state.selectedPlace.objectid) : this.props.clearMarker()
      }
    );

  };

  handleReadReviewClick = () => {
    this.setState((prevState) => ({ readReviews: !prevState.readReviews }));
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
                objectid={location.objectid}
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
                </Provider>
                <button onClick={this.handleReadReviewClick}>
                  {" "}
                  Read Reviews{" "}
                </button>
              </div>
            </React.Fragment>
          </InfoWindowEx>
        </Map>
        {this.state.readReviews && this.props.reviewedMarker && this.props.reviewedMarker.reviews && (
          <LocationReviews
            placeReviews={this.props.reviewedMarker}
            handleReadReviewClick={this.handleReadReviewClick}
          />
        )}
        <Router history={history}>
          {loggedIn ? <NavBar /> : <Home />}
          <Route path='/login' exact component={Login} />
          <Route path='/signup' exact component={Signup} />
          <Route path='/home' exact component={Home} />
          <Route path='/reviews/new' exact component={NewReviewForm} />
        </Router>
      </div>
    );
  }
}

const mapStateToProps = ({ currentUser, locations, locationMarker, reviewedMarkers, reviewedMarker }) => {
  return {
    loggedIn: !!currentUser,
    locationMarker,
    locations,
    reviewedMarkers,
    reviewedMarker
  };
};

const LoadingContainer = (props) => (
  <div className='wrap'>
    <div className='loading'>
      <div className='bounceball'></div>
      <div className='text'>NOW LOADING</div>
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
  getReviewedMarkers,
  getMarker,
  clearMarker,
})(WrappedContainer);