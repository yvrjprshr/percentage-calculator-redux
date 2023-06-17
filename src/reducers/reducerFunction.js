const initialState = {
    x:"",
    y:"",
    z:"ans"
}

const reducerFunction = (state = initialState, action)=>{
    switch(action.type){
        case "IP1":
            return {
                ...state,
                x: action.payload === "" ? "" : (action.payload)
            }
        case "IP2":
            return {
                ...state,
                y: action.payload === "" ? "" :(action.payload)
            }
        case "ANS":
            return {
                ...state,
                z: Number(state.x) * Number(state.y) / 100
            }
        default: 
            return state
    }
}

export default reducerFunction;