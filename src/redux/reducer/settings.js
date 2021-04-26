// in this reducer => all settings will be stored (Like theme of app etc.)
const INITIAL_STATE = {
    theme: {color: '#fff', backgroundColor: '#0f0f0f', primaryColor: '#f8c301'}
}

export default (state = INITIAL_STATE , action) => {
    console.log("action", action)
    switch (action.type) {
        case "SET_ADMIN_DATA":
            return({
                ...state,
                adminData: action.payload
            })
    }
            return state;
}