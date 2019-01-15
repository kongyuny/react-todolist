var initState = {
    abc:'123222',
    list:[]
};
export default function (state = initState, action) {
    if(action.type==="add_list"){
        const newState=JSON.parse(JSON.stringify(state));
        newState.abc=action.str;
        console.log(newState)
        return newState;
    }



    // if (action.type === 'add_list') {
        // const newState = JSON.parse(JSON.stringify(state));
        // newState.abc =  action.contentk;
        // console.log(newState)
        // return newState;
    // };
    // console.log(state)
    return state;
};