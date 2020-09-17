import React from 'react';
import '../App.css';
import { connect } from 'react-redux'
import { Map, Marker, GoogleApiWrapper, InfoWindow } from 'google-maps-react'
import { getCurrentUser } from "../actions/users/currentUser.js"
import { getLocations, setLocations, setLocationMarker } from "../actions/locations/getlocations.js"
import NavBar from "./NavBar.js"
import Review from "./Review.js"
import Home from "./Home.js"
import Login from "./Login.js"
import Signup from "./Signup.js"
import NewReview from "./NewReviewForm.js"
import { Router, Route } from 'react-router-dom';
import history from '../history';
import mapStyles from "../mapStyles.js"
import NewReviewForm from './NewReviewForm.js';



class App extends React.Component {
    state = {
        showingInfoWindow: false,
        activeMarker: {},
        selectedPlace: {},
      };

    componentDidMount() {
        this.props.getCurrentUser()
        this.props.getLocations()
    }


    // shouldComponentUpdate(nextProps) {
    //     // console.log("should not update", nextProps)
    //     // if (this.props.locations === nextProps.locations) {
    //     //     return false
    //     // }

    //     return true
    // }

      onMarkerClick = (props, marker, e, location) => {
        // console.log("onMarkerClick marker", props)
        // console.log("onMarkerClick marker", marker)
        // console.log("onMarkerClick e", e)
        console.log("onMarkerClick location", location)
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
          });
        //   this.props.setLocationMarker(location)
      }

      onMapClicked = (props) => {
        if (this.state.showingInfoWindow) {
          this.setState({
            showingInfoWindow: false,
            activeMarker: null
          })
        }
      };
 


    render() {
        const loggedIn = this.props.loggedIn
        const containerStyle = {
            width: "100%",
            height: "100vh"
        }
        const center = {
            lat: 40.678177,
            lng: -73.944160
        }
        const options = {
            disableDefaultUI: true
        }

        return (
            <div className="App">

                <h1>
                    HotSpotter <span>📶 </span>
                </h1>

                <Map google={this.props.google} onClick={this.onMapClicked} zoom={12} mapContainerStyle={containerStyle} initialCenter={center} styles={mapStyles} disableDefaultUI={true}>
                    {this.props.locations.map(location => {
                        // return <Marker key={location.objectid} icon={{url: require('../wifiSignal.svg')}} name={location.name} position={{lat: location.latitude, lng: location.longitude}} onClick={(event) => {this.props.setLocationMarker(location)}}>
                        return <Marker key={location.objectid} icon={{ url: require('../wifiSignal.svg') }} name={'Dolares Park'} position={{ lat: location.latitude, lng: location.longitude }} onClick={this.onMarkerClick} name={'Current location'}>
                                
                        </Marker>
                    })}
                    {/* {this.props.locationMarker && (
                        <InfoWindow children={<form></form>} onCloseClick={() => { setLocationMarker(null) }} visible={true} content={this.props.locationMarker.latitude} position={{ lat: parseFloat(this.props.locationMarker.latitude), lng: parseFloat(this.props.locationMarker.longitude) }}>

                        </InfoWindow>
                    )} */}
                    <InfoWindow marker={this.state.activeMarker} visible={this.state.showingInfoWindow}>
                        <div>
                <h1>{this.state.selectedPlace.name}</h1>
                        </div>
                    </InfoWindow>
                </Map>
                <Router history={history}>
                    {loggedIn ? <NavBar /> : <Home />}
                    <Route path='/login' exact component={Login} />
                    <Route path='/signup' exact component={Signup} />
                    <Route path='/reviews' exact component={Review} />
                    <Route path='/reviews/new' exact component={NewReview} />
                    <Route path='/navbar' exact component={NavBar} />
                </Router>
            </div>


        )
    }
}

const mapStateToProps = ({ currentUser, locations, locationMarker }) => {
    console.log("mapStateToProps", locationMarker)
    return ({
        loggedIn: !!currentUser,
        locationMarker,
        locations
    })
}

const LoadingContainer = (props) => (
    <div>Fancy loading container!</div>
  )

const WrappedContainer = GoogleApiWrapper({
    apiKey: (process.env.REACT_APP_API_KEY),
    LoadingContainer: LoadingContainer
})(App)

export default connect(mapStateToProps, { getCurrentUser, getLocations, setLocationMarker })(WrappedContainer) 