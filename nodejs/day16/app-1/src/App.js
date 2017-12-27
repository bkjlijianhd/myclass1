import React, { Component } from 'react';
import Tables from  './components/Tables.js'




class App extends Component {
  constructor(props){
    super(props);
    this.state={ detailShow:'none',members:["新闻","好123","地图","视频","贴吧","学术","登录","设置"]};
  }

  handleMouseOver = (e) => {
  this.setState({
  detailShow: 'block'
  })
  }

  handleMouseOut = (e) =>{
  this.setState({
  detailShow: 'none'
  })
  }

  render(){
    return (
      <div>
        <ul>
          {
            this.state.members.map((e,i)=>{
              return <li className="one" key={i}>{e}</li>
            })

          }
        </ul>
            // <li className="one">更多产品</li>
        <Tables/>
            <p onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut} id="baidu">welcome to baidu</p>
      </div>

    );
  }
}


export default App;
