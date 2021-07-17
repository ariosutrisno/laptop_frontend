const {GET_LIST_KRITERIA} = require('../../../constants/constants');

const initState = {
data: [],
};

const datakriteria = (state = initState, action) => {
switch (action.type) {
    case `${GET_LIST_KRITERIA}_PENDING`:
    
    if (action.error == undefined && action.payload) {
        return {
        ...state,
        data: action.payload,
        };
    }
    
    case `${GET_LIST_KRITERIA}_FULFILLED`:
    
    if (action.error == undefined && action.payload) {
        return {
        ...state,
        data: action.payload
        };
    }
    
    case `${GET_LIST_KRITERIA}_REJECTED`:
    
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

export default datakriteria;
