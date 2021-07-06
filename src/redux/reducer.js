import { combineReducers } from "redux";

/* INITIAL STAGE REGISTER */
const initialStateRegister  = {
    form: {
        namaLengkap: '',
        email:'',
        password:'',
        passwordConfirm:'',
    }
}
const RegisterReducer =(state = initialStateRegister, action) => {
    if (action.type === 'SET_FORM') {
        return {
            ...state,
            form:{
                ...state.form,
                [action.inputType]: action.inputValue
            }
        }
    }
    return state
}


const initialStateLogin = {
    formLogin:{
        email : '',
        password : '',
    },
    infoEmail:"Masukkan Email Anda",
    infoPassword:"masukkan password anda",
    isLogin:true,
}

const LoginReducer = (state = initialStateLogin, action) => {
    if (action.type === 'SET_FORM') {
        return{
            ...state,
            formLogin:{
                ...state.formLogin,
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