import React,{Component} from 'react';
class List extends Component{
   render(){
      let {data,del,index} = this.props;
      console.log(del)
      return (
         <li>
            <i  style={{width:"100px",display:"inline-block",fontStyle:"normal"}}>{data}</i>
            <span
            style={{marginLeft:"20px"}}
             onClick = {()=>{
                  alert(1)
                  del(index)
              }}
            >删除</span></li>
      )

   }
}
export default List;