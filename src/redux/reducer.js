import { combineReducers } from "redux"


/* 
*
* REGISTER REDUCEER
*
*/
const initialStateRegister = {
    formRegister:{
        nama: '',
        email:'',
        password:'',
        password_confirm:'',
    },
    isRegister:true,
    
}

const RegisterReducer = (state = initialStateRegister,action)=>{
    if (action.type === 'SET_FORM_REGISTER') {
        return{
            ...state,
            formRegister:{
                ...state.formRegister,
                [action.inputType]:action.inputValue,
            },
        }
    }
    if (action.type) {
        
    }
    return state
}
/* 
*
* LOGIN REDUCEER
*
*/
const initialStateLogin = {
    formLogin:{
        email:'',
        password:'',
    },
    isLogin:true,
}

const LoginReducer = (state = initialStateLogin,action)=>{
    if (action.type === 'SET_FORM_LOGIN') {
        return{
            ...state,
            formLogin:{
                ...state.formLogin,
                [action.inputType]:action.inputValue,
            }

        }
    }
    return state
}

const Reducer = combineReducers({
    RegisterReducer,
    LoginReducer,
})

export default Reducer