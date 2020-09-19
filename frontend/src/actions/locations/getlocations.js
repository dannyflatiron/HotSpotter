export const setLocations = locations => {
    return {
        type: "SET_LOCATIONS",
        locations
    }
}

export const setLocationMarker = (location) => {
    console.log("inside setLocationMarker action creator", location)
    return {
        type: "SET_LOCATION_MARKER",
        location
    }
}

export const getLocations = () => {
    return dispatch => {
        return fetch("https://data.cityofnewyork.us/resource/yjub-udmw.json", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
        })
        .then(response => response.json())
        .then(response => {
            if (response.error) {
                alert(response.error)
            } else {
                dispatch(setLocations(response.slice(0,80)))
            }
        })
        .catch(console.log)
    }
}
