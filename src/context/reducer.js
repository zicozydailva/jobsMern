import { CLEAR_ALERT, DISPLAY_ALERT, REGISTER_USER_BEGIN, REGISTER_USER_SUCCESS, REGISTER_USER_ERROR } from "./action"

const reducer = (state, action) => {
    if(action.type === DISPLAY_ALERT) {
        return {...state, showAlert: true, alertType: "danger", alertText: "Please provide all values"}
    }
    if(action.type === CLEAR_ALERT) {
        return {...state, showAlert: false}
    }
    throw new Error(`No such action: ${action.type}`)
}

export default reducer