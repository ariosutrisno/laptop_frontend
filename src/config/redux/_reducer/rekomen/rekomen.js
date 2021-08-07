const {LIST_REQUEST_USER} = require('../../../constants/constants');

const initState = {
data: [],
};

const rekomen = (state = initState, action) => {
switch (action.type) {
    case `${LIST_REQUEST_USER}_PENDING`:
    if (action.error == undefined && action.payload) {
        return {
        ...state,
        data: action.payload,
        };
    }
    
    case `${LIST_REQUEST_USER}_FULFILLED`:
    
    if (action.error == undefined && action.payload) {
        return {
        ...state,
        data: action.payload
        };
    }
    
    case `${LIST_REQUEST_USER}_REJECTED`:
    
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

export default rekomen;
