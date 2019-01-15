import React,{Component} from 'react';
import store from './store/index.js';
import {connect} from 'react-redux';

class App extends Component{

    render() {
        let data = this.props;
        return <div onClick={data.clickDis}>{data.abc}</div>
    }
}

const a=( state)=>{
    return {
        abc:state.abc
    }
}

const b = (dispatch) => {
    return {
        clickDis() {
            const action={
                type:'add_list',
                str:'我是小傻瓜'
            };
            dispatch(action)
        }
    }
}
export default connect(a,b) (App);
