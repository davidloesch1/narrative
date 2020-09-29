const loggedIn = (state=false) => {
    console.log("currently ", state.loggedIn)
    return !state.loggedIn;
}

export default loggedIn;
