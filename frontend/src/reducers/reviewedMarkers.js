// const initialState = {
//     locationReviews: {
//         id: 1,
//         location: "8 THOMAS S BOYLAND STREET",
//         name: "Saratoga - Brooklyn Public Library",
//         ssid: "BPLUNWIRED",
//         price: "Free",
//         reviews: [
//           {
//             id: 1,
//             content: "Please work I hope you do ",
//             user_id: 1,
//             location_id: 1,
//             created_at: "2020-09-18T01:21:49.805Z",
//             updated_at: "2020-09-18T01:21:49.805Z",
//           },
//           {
//             id: 2,
//             content: "This is a second test",
//             user_id: 1,
//             location_id: 1,
//             created_at: "2020-09-18T01:22:18.001Z",
//             updated_at: "2020-09-18T01:22:18.001Z",
//           },
//           {
//             id: 3,
//             content: "Please work I hope you do ",
//             user_id: 1,
//             location_id: 1,
//             created_at: "2020-09-18T01:21:49.805Z",
//             updated_at: "2020-09-18T01:21:49.805Z",
//           },
//           {
//             id: 4,
//             content: "Please work I hope you do ",
//             user_id: 1,
//             location_id: 1,
//             created_at: "2020-09-18T01:21:49.805Z",
//             updated_at: "2020-09-18T01:21:49.805Z",
//           },
//           {
//             id: 6,
//             content: "Please work I hope you do ",
//             user_id: 1,
//             location_id: 1,
//             created_at: "2020-09-18T01:21:49.805Z",
//             updated_at: "2020-09-18T01:21:49.805Z",
//           },
//           {
//             id: 7,
//             content: "Please work I hope you do ",
//             user_id: 1,
//             location_id: 1,
//             created_at: "2020-09-18T01:21:49.805Z",
//             updated_at: "2020-09-18T01:21:49.805Z",
//           },
//         ],
//       },
// }

const initialState = null

export default (state = initialState, action) => {
    switch (action.type) {
        case "SET_REVIEWED_MARKERS":
          // THIS WORKS LEAVE IT ALONE
            return action.reviews;
        default: 
            return state;
    };
};