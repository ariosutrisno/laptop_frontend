const {GET_LIST_NORMALISASI} = require('../../../constants/constants');

const initState = {
data: [],
};

const normalisasi = (state = initState, action) => {
switch (action.type) {
    case `${GET_LIST_NORMALISASI}_PENDING`:
    if (action.error == undefined && action.payload) {
        return {
        ...state,
        data: action.payload,
        };
    }
    
    case `${GET_LIST_NORMALISASI}_FULFILLED`:
    
    if (action.error == undefined && action.payload) {
        return {
        ...state,
        data: action.payload
        };
    }
    
    case `${GET_LIST_NORMALISASI}_REJECTED`:
    
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

export default normalisasi;
