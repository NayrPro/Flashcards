const INITIAL_STATE = {
    motherLanguage: "",
    foreignLanguage: "",
    wordsNumber: "",
    showModalList: false,
    vocabDatas: []
}

function interfaceReducer(state = INITIAL_STATE, action) {

    switch (action.type) {
        case "MOTHER":
            return{
                ...state,
                motherLanguage: action.payload
            }
        case "FOREIGN":
            return{
                ...state,
                foreignLanguage: action.payload
            }
        case "NUMBER":
            return{
                ...state,
                wordsNumber: action.payload
            }
        case "MODAL":
            return{
                ...state,
                showModalList: action.payload
            }
        case "DATA":
            return{
                ...state,
                vocabDatas: action.payload
            }
        default: return state;
    }
}

export default interfaceReducer