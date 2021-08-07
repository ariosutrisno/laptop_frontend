const {GET_ALL_RANKING} = require('../../../constants/constants');

const initState = {
data: [],
};

const ranking = (state = initState, action) => {
switch (action.type) {
    case `${GET_ALL_RANKING}_PENDING`:
    if (action.error == undefined && action.payload) {
        return {
        ...state,
        data: action.payload,
        };
    }
    
    case `${GET_ALL_RANKING}_FULFILLED`:
    
    if (action.error == undefined && action.payload) {
        return {
        ...state,
        data: action.payload
        };
    }
    
    case `${GET_ALL_RANKING}_REJECTED`:
    
    if (action.error == undefined && action.payload) {
        return {
        ...state,
        data: action.payload
        };
    }
    
    default:
    return state;
    
}
};

export default ranking;
