export const setForm = (inputType,value) => {
    return{type: 'SET_FORM', inputType:inputType,inputValue:value};
};

export const setFormLogin = (InputType,valueType)=>{
    return {type: 'SET_FORM', inputType:InputType,inputValue:valueType}
}