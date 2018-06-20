export default (state, action) => {
    switch (action.type) {
    case "SET_TECHNOLOGY":
        return {
            ...state,
            text: action.tech
        }
    default:
        return state
    }

}