const {GET_LIST_PERHITUNGAN} = require('../../../constants/constants');

const initState = {
data: [],
score:[],
};

const perhitungan = (state = initState, action) => {
switch (action.type) {
    case `${GET_LIST_PERHITUNGAN}_PENDING`:
    if (action.error == undefined && action.payload) {
        return {
        ...state,
        data: action.payload,
        score: action.payload,
        };
    }
    
    case `${GET_LIST_PERHITUNGAN}_FULFILLED`:
    
    if (action.error == undefined && action.payload) {
        return {
        ...state,
        data: action.payload,
        score: action.payload,
        };
    }
    
    case `${GET_LIST_PERHITUNGAN}_REJECTED`:
    
    if (action.error == undefined && action.payload) {
        return {
        ...state,
        data: action.payload,
        score: action.payload,
        };
    }
    
    default:
    return state;
    
}
};

export default perhitungan;
