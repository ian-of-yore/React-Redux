import { DECREMENT_COUNTER, INCREMENT_COUNTER, RESET_COUNTER } from "../constants/counterConstants"

const initialCounterState = {
    count: 0
}

const counterReducer = (state = initialCounterState, action) => {
    switch (action.type) {
        case INCREMENT_COUNTER:
            return {
                ...state,
                count: state.count + 1
            }
        case DECREMENT_COUNTER:
            return {
                ...state,
                count: state.count - 1
            }
        case RESET_COUNTER:
            return {
                ...state,
                count: 0
            }
        default: return state
    }
}

export default counterReducer;