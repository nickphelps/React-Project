// import { Container } from "react-bootstrap";

const initialState = {
    fname: '',
    lname: '',
    email: '',
    password: '',
    showDashboard: false,
    UIState: {
        NavBarColor: '',
        ButtonColors: '',
        BackgroundColor:'',
        DashboardColor: ''
    } 
}

const UserReducer = (state = initialState, action) => {
    
    if (action.type === 'HANDLE_SUBMIT') {
        console.log(action)

        return {
            ...state,
            fname: action.payload.fname,
            lname: action.payload.lname,
            email: action.payload.email,
            password: action.payload.password,
            showDashboard: action.payload.showDashboard
        }
    } else if (action.type === 'GO_HOME') {
        console.log(action, 'GO_HOME')

        return {
            ...state,
            showDashboard: action.payload
        }
        
    } else if(action.type === 'CHANGE_NAVBAR_COLOR') {
        console.log(action, 'CHANGE_NAVBAR_COLOR')
        // const newNavBarColor = state.userInfo.slice()
        // const newNavBarColorLength = state.userInfo.length - 1
        // console.log(newNavBarColor)
        // newNavBarColor[newNavBarColorLength].UIState.NavBarColor = action.payload
        // console.log(newNavBarColor)
        return {
            ...state,
            // [state.UIState.NavBarColor]: action.payload
            UIState: {
                ...state.UIState,
                NavBarColor: action.payload,
                
            } 
        }
    } else if (action.type = 'CHANGE_BACKGROUND_COLOR') {
        console.log(action, 'CHANGE_BACKGROUND_COLOR')

        return {
            ...state,
            UIState: {
                ...state.UIState,
                BackgroundColor: action.payload,
            }
        }
    }
    return state
}

export default UserReducer 