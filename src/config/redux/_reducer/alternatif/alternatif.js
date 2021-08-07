const {GET_LIST_ALTERNATIF} = require('../../../constants/constants');

const initState = {
data: [],
};

const alternatif = (state = initState, action) => {
switch (action.type) {
    case `${GET_LIST_ALTERNATIF}_PENDING`:
    
    if (action.error == undefined && action.payload) {
        return {
        ...state,
        data: action.payload,
        };
    }
    
    case `${GET_LIST_ALTERNATIF}_FULFILLED`:
    
    if (action.error == undefined && action.payload) {
        return {
        ...state,
        data: action.payload
        };
    }
    
    case `${GET_LIST_ALTERNATIF}_REJECTED`:
    
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

export default alternatif;
