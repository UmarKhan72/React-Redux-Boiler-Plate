const INITIAL_STATE = {
    users:[
        {
            name: "Muhammad Umar Khan",
            email: "m.u.k@gmail.com"
        }
    ]
}

export default (state = INITIAL_STATE, action)=> {
    switch(action.type){
        case "SETDATA":
            return({
                ...state,
                users: [...state.users,action.user]
            })
    }
    return state;
}