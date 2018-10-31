import React, {Component} from 'react';
import {connect} from 'react-redux';
import Topics from 'reduxdemo/topics';



class Topics extends Component{
   constructor(){
     super();
     this.state = {}
   }
  state = {
    tps:['java','React','Angular'];


  }
render()
{
  var disptps = this.state.tps.map((t) =>{
    return <h3>{t}</h3>


  })
}
}

ReactDOM.render(<Topics />)

export default connect(mapStateToPress)