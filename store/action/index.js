const set_data = () => {
    return (dispatch) => {
        console.log("Running")
        dispatch({
            type: "SETDATA",
            user: {name: "Xain",email: "xk@gmail.com"}
        })
    }
}

export {
    set_data
}