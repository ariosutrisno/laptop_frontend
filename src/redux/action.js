export const setFormLogin = (inputType,value) =>{
    return {type: 'SET_FORM_LOGIN', inputType:inputType, inputValue:value}
}
export const setFormRegister = (inputType,value) =>{
    return {type: 'SET_FORM_REGISTER', inputType:inputType, inputValue:value}
}