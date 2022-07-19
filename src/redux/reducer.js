const initState = { 
    searchResults: []
 }

const Reducer = (state=initState, action) => {

    switch(action.type){
        case "CHANGE_SEARCH_RESULTS":
            return { ...state, searchResults: action.payload };
        default:
            return state;
    }
}

export default Reducer;
