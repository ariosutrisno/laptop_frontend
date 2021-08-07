const {GET_LIST_UTILITY} = require('../../../constants/constants');

const initState = {
data: [],
};

const utility = (state = initState, action) => {
switch (action.type) {
    case `${GET_LIST_UTILITY}_PENDING`:
    if (action.error == undefined && action.payload) {
        return {
        ...state,
        data: action.payload,
        };
    }
    
    case `${GET_LIST_UTILITY}_FULFILLED`:
    
    if (action.error == undefined && action.payload) {
        return {
        ...state,
        data: action.payload
        };
    }
    
    case `${GET_LIST_UTILITY}_REJECTED`:
    
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

export default utility;
