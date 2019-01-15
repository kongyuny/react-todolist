import React,{Component} from 'react';
import List from './List.js'
class TodoList extends Component{
   state={
      val:'11111111',
      list:[]
   }
   // 内容发生改变
   hadchange(e){
      this.setState({
         val:e.target.value
      })
   }
   btn(){
      if(!this.state.val) return;
      this.setState({
         list:[...this.state.list,this.state.val],
         val:'',
      })
   }
   del(index){
      const list=this.state.list;
      list.splice(index,1);
      this.setState({
         list:list
      })
   }

   render(){
      let {list}=this.state;
      console.log(list)
      return(
         <div>
            <div>
               <input type="text"
               value={this.state.val}
               onChange={this.hadchange.bind(this)}/>
               <button onClick={this.btn.bind(this)}>按钮</button>
            </div>
            <ul>
               {
                  list.map((item,index)=>{
                     return (
                        <List
                         key={index}
                         data={item}
                         index={index}
                         del={this.del.bind(this,index)}


                        />
                     )
                  })
               }
            </ul>

         </div>
      )
   }
}
export default TodoList;