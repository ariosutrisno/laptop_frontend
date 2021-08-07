const {FILTER_LAPTOP} = require('../../../constants/constants');

const initState = {
data: [],
};

const filter = (state = initState, action) => {
switch (action.type) {
    case `${FILTER_LAPTOP}_PENDING`:
    
    if (action.error == undefined && action.payload) {
        return {
        ...state,
        data: action.payload,
        };
    }
    
    case `${FILTER_LAPTOP}_FULFILLED`:
    
    if (action.error == undefined && action.payload) {
        return {
        ...state,
        data: action.payload
        };
    }
    
    case `${FILTER_LAPTOP}_REJECTED`:
    
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

export default filter;
