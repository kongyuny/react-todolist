import React,{Component} from 'react';
class List extends Component{
   render(){
      let {itemList,del} = this.props;
      return (
         itemList.map((item,index)=>{
            return (
               <li key={index}>
                  <i  style={{width:"100px",display:"inline-block",fontStyle:"normal"}}>{item}</i>
                  <span
                  style={{marginLeft:"20px"}}
                  onClick={()=>{
                     del(index)
                  }}
                  >删除</span></li>
            )
         })
      )
   }
}
export default List;