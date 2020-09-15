export const setLocations = locations => {
    return {
        type: "SET_LOCATIONS",
        locations
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
            // if (response.error) {
            //     alert(response.error)
            // } else {
                dispatch(setLocations(response.slice(0,50)))
            // }
        })
        .catch(console.log)
    }
}

