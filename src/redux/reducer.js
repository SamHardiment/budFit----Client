const initState = { 
    searchResults: [],
    currentUser: {}
 }

const Reducer = (state=initState, action) => {

    switch(action.type){
        case "CHANGE_SEARCH_RESULTS":
            return { ...state, searchResults: action.payload };
        case "CHANGE_CURRENT_USER":
            return { ...state, currentUser: action.payload };
        default:
            return state;
    }
}

export default Reducer;
