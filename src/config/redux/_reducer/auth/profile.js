const {GET_AUTH} = require('../../../constants/constants');

const initState = {
data: [],
};

const profile = (state = initState, action) => {
switch (action.type) {
    case `${GET_AUTH}_PENDING`:
    
    if (action.error == undefined && action.payload) {
        return {
        ...state,
        data: action.payload,
        };
    }
    
    case `${GET_AUTH}_FULFILLED`:
    
    if (action.error == undefined && action.payload) {
        return {
        ...state,
        data: action.payload
        };
    }
    
    case `${GET_AUTH}_REJECTED`:
    
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

export default profile;
