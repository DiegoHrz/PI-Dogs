//import action-types

//definir el initial state
let initialState={
    dogs:[],
    allDogsFiltered: [],
    details: [],
    temperaments:[],
    dogsHome:[],
}


//definir el rootReducer
function rootReducer(state=initialState, action){

    switch (action.type) {
        default:
            return state;
            break;
    }
}

export default rootReducer