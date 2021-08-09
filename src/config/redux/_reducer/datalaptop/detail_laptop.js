const {GET_DETAIL_LAPTOP} = require('../../../constants/constants');

const initState = {
data: [],
};

const detail_laptop = (state = initState, action) => {
switch (action.type) {
    case `${GET_DETAIL_LAPTOP}_PENDING`:
    
    if (action.error == undefined && action.payload) {
        return {
        ...state,
        data: action.payload,
        };
    }
    
    case `${GET_DETAIL_LAPTOP}_FULFILLED`:
    
    if (action.error == undefined && action.payload) {
        return {
        ...state,
        data: action.payload
        };
    }
    
    case `${GET_DETAIL_LAPTOP}_REJECTED`:
    
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

export default detail_laptop;
