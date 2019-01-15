var infoState = {
    abc:12,
    list:[1,2,3]
};

const reduer = ( state = infoState, action) => {
    if (action.type == 'clcik_add_state') {
        const newState = JSON.parse(JSON.stringify(state));
        newState.abc = action.abc + action.n;
        return newState;
    };
    return state;
}

export default reduer;