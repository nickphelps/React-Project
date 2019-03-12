// import { Container } from "react-bootstrap";

const initialState = {
    userInfo: [
        {
            fname: '',
            lname: '',
            email: '',
            password: '',
            showDashboard: false,
            UIState: {
                NavBarColor: '',
                ButtonColors: '',
                FontSize:'',
                DashboardColor: ''
            }
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
        
    } else if(action.type === 'CHANGE_NAVBAR_COLOR') {
        console.log(action, 'CHANGE_NAVBAR_COLOR')
        const newNavBarColor = state.userInfo.slice()
        const newNavBarColorLength = state.userInfo.length - 1
        console.log(newNavBarColor)
        newNavBarColor[newNavBarColorLength].UIState.NavBarColor = action.payload
        console.log(newNavBarColor)
        return {
            userInfo: newNavBarColor
        }
    }
    return state
}

export default loginReducer 