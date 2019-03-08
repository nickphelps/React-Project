// import { Container } from "react-bootstrap";

const initialState = {
    userInfo: [
        {
            fname: '',
            lname: '',
            email: '',
            password: '',
            showDashboard: false
        }
    ]
}

const loginReducer = (state = initialState, action) => {
    
    if (action.type === 'HANDLE_SUBMIT') {
        console.log(action)
        const newUserInfo = state.userInfo.slice() //takes a array and creates a new one. Could use immutabble
        newUserInfo.push(action.payload)
        console.log(newUserInfo)
        return {
            userInfo: newUserInfo
        }
    } else if (action.type === 'GO_HOME') {
        console.log(action, 'GO_HOME')
        const newState = state.userInfo.slice()
        const newStateLength = state.userInfo.length - 1
        console.log(newState)
        newState[newStateLength].showDashboard = action.payload
        
        console.log(newState)
        return {
            // newState[newStateLength].showDashboard: action.payload,
            userInfo: newState
        }
        
    }
    return state
}

export default loginReducer 