const initialState = {
    userInfo: [
        {
            fname: 'Nick',
            lname: 'Phelps',
            email: 'testEmail',
            password: 'testPassword'
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
    
    }
    return state
}

export default loginReducer 