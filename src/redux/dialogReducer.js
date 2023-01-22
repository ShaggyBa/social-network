const SEND_MESSAGE_FROM_DIALOG = "SEND-MESSAGE-FROM-DIALOG"
const UPDATE_NEW_MESSAGE_STATE = "UPDATE-NEW-MESSAGE-STATE"

const dialogReducer = (state, action) => {
    // eslint-disable-next-line default-case
    switch (action.type) {
        case SEND_MESSAGE_FROM_DIALOG:
            state.messagesData.push({text: state.values.newMessageState})
            state.values.newMessageState = ""
            return state
        case UPDATE_NEW_MESSAGE_STATE:
            state.values.newMessageState = action.value
            return state
        default:
            return state
    }

}

export default dialogReducer

export const addMessageFromDialogActionCreator = () =>
    ({
        type: SEND_MESSAGE_FROM_DIALOG
    })

export const updateNewMessageStateActionCreator = (value) =>
    ({
        type: UPDATE_NEW_MESSAGE_STATE,
        value: value
    })