import { combineReducers } from "redux";


const initialStateRegister = {
    form:{
        name : '',
        email : '',
        password : '',
        password_confirmation : '',
    },
    
}

const RegisterReducer = (state = initialStateRegister, action) => {
    if (action.type === 'SET_TITLE') {
        return{
            ...state,
        };
    }
    if (action.type === 'SET_FORM') {
        return{
            ...state,
            form:{
                ...state.form,
                [action.inputType]:action.inputValue,

            },
        };
        
    }
    return state;
}

const initialStateLogin = {
    form:{
        email : '',
        password : '',
    },
    info:"masukkan password anda",
    isLogin:true,
}

const LoginReducer = (state = initialStateLogin, action) => {
    if (action.type === 'SET_FORM') {
        return{
            ...state,
            form:{
                ...state.form,
                [action.inputType]:action.inputValue,

            },
        };
        
    }
    return state;
}

const initiaStateEditProfile = {
    form:{
        fullname:'',
        email: '',
        password : '',
        confirm_password: '',
        gender : '',

    }
}
const EditProfile = (state = initiaStateEditProfile,action)=>{
    if (action.type === 'SET_FORM') {
        return{
            ...state,
            form:{
                ...state.form,
                [action.inputType]:action.inputValue,
            }
        };
    }
    return state;
}
const reducer = combineReducers({
    RegisterReducer,
    LoginReducer,
    EditProfile,
});
export default reducer;