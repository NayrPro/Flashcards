const INITIAL_STATE = {
    word: "",
    wordInput: "",
    wordMatch: "",
    vocab: [],
    languageSelect: "",
    languageInput: "",
    menu: "on", 
    score: 0
}

function wordReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case "WORD":
            return{
                ...state,
                word : action.payload
            }
        case "WORDINPUT":
            return{
                ...state,
                wordInput : action.payload
            }
        case "MATCH":
            return{
                ...state,
                wordMatch: action.payload
        }
        case "VOCAB":
            return{
                ...state,
                vocab : action.payload
            }
        case "SELECT":
            return{
                ...state,
                languageSelect : action.payload
            }
        case "INPUT":
            return{
                ...state,
                languageInput : action.payload
            }
        case "MENU":
            return{
                ...state,
                menu : action.payload
            }
        case "SCORE":
            return{
                ...state,
                score : action.payload
            }
        default : return state
    }
}

export default wordReducer