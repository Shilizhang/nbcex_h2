import React from "react";
import Quill from "quill";
import 'quill/dist/quill.snow.css'
import './editor.scss'

class Editor extends React.Component {
//   state = {
//     value: ""
//   };
//   componentDidMount() {
//     // 配置项，在Quill 官网上有详细说明
//     const options = {
//       debug: "warn",
//       theme: "snow"
//     };
//     // 实例化 Quill 并且储存在实例原型上
//     this.editor = new Quill("#editor", options);
//     // 实现输入受控，从state中读取html字符串写入编辑器中
//     const { value } = this.state;
//     // 判断value中是否有值，如果有那么就写入编辑器中
//     if (value) this.editor.clipboard.dangerouslyPasteHTML(value);
//     // 设置事件，change事件，
//     this.editor.on("text-change", this.handleChange);
//   }
//   handleChange = () => {
//     // change 事件将HTML字符串更新到state里面，
//     this.setState({
//       value: this.editor.root.innerHTML,
//       mediaVisbile: false
//     });
//   };
//   render() {
//     return <div id="editor" />;
//   }
// }
state = {
  value: "",
  Ispreview: false,
  time:'',
  titleVal:''
};
componentDidMount() {
  // 配置项，在Quill 官网上有详细说明
  const options = {
    debug: "warn",
    theme: "snow",
    modules: { // 自定义 toolbar 填写这个属性， 值写上 div 的 id
      toolbar: "#toolbar"
    }
  };
  // 实例化 Quill 并且储存在实例原型上
  this.editor = new Quill("#editor", options);
  // 实现输入受控，从state中读取html字符串写入编辑器中
  const { value } = this.state;
  // 判断value中是否有值，如果有那么就写入编辑器中
  if (value) this.editor.clipboard.dangerouslyPasteHTML(value);
  // 设置事件，change事件，
  this.editor.on("text-change", this.handleChange);
  this.getTime()
}
handleChange = () => {
  // change 事件将HTML字符串更新到state里面，
  this.setState({
    value: this.editor.root.innerHTML,
    mediaVisbile: false
  });
};
onsubmit = ()=>{
  let value = this.state.value
  // console.log(this.props.add())
  if(value){
    // this.props.add(false)
  }else {
    alert("输入不能为空")
  }
}
preview = ()=> {
  console.log(this.state.value)
  if(!this.state.titleVal){
    alert("标题为空")
    return
  }
  this.setState({
    Ispreview: true
  })
}
getTime = ()=>{
  let date = new Date()
  let year = date.getFullYear()
  let mou = date.getMonth() + 1
  let day = date.getDate()
  this.setState({
    time: year + '-' + mou + '-' + day
  })
}
changeTitle = (e)=> {
  this.setState({
    titleVal: e.target.value
  })
}
previewSubmit = ()=>{
  this.setState({
    Ispreview: false
  })
}
render() {
  return (
    <div className= "editor">
      <table style= {{display:this.state.Ispreview?'none':'block'}}>
        <tbody>
        <tr>
          <th colSpan="2">
            <div >系统公告新增</div>
          </th>
        </tr>
        <tr>
          <td colSpan="2">
            <div>
              <span className='editorTitle'>公告号:12345678</span>
              <span className='editorTitle'>发布人: admin</span>
              <span className='editorTitle'>发布时间: {this.state.time}</span>
            </div>
          </td>
        </tr>
        <tr>
          <td >公告标题</td>
          <td>
            <input type="text" placeholder= "请输入标题" onChange = {this.changeTitle} />
          </td>
        </tr>
        <tr>
          <td>
            <div className= "editor_content_left">公告内容</div>
          </td>
          <td height= "550px" width= "1410px">
            <div style={{ backgroundColor: "#fff", height:"503px",width:"1411px", overflow:"scroll-y"}}>
              <div id="toolbar" style={{ display: "flex", alignItems: "center" }}>
                {/* <select className="ql-size" defaultValue="small" style={{height:"26px", lineHeight:"18px", border:"1px solid rgba(0,0,0,.2)", outline:"none"}} >
                  <option value="small">小</option>
                  <option value="large">中</option>
                  <option value="huge">大</option>
                </select> */}
                <button className="ql-bold" />
                <button className="ql-strike" />
                {/* <button className="ql-italic" /> */}
                <button className="ql-script" value="sub"></button>
                <button className="ql-script" value="super"></button>
                <select className="ql-color" defaultValue="" >
                </select>
                <select className="ql-background" defaultValue="" style={{}}>
                </select>
                {/* <button className="ql-list" value="ordered"></button>
                <button className="ql-list" value="bullet"></button> */}
                {/* <button
                  style={{ width: "80px" }}
                  onClick={() =>{
                    console.log("这里可以通过读取state来拿到所有的html字符串")
                    console.log(this.state)
                    }
                  }
                >
                  提交
                </button> */}
              </div>
              <div id="editor" style={{ backgroundColor: "#fff", height:"462px",width:"1410px", overflow:"scroll-y",borderBottom:"1px solid black"}}/>
            </div>
          </td>
        </tr>
        <tr>
          <td colSpan="2">
            {/* <div> */}
              <button onClick={this.onsubmit}>保存</button>
              <button onClick={this.preview}>公告预览</button>
              <button onClick={this.onsubmit}>重置</button>
          {/* </div> */}
          </td>
        </tr>

        </tbody>
      </table>
        <div className= "preview" style= {{display:this.state.Ispreview?'block':'none'}}>
            <div className= "previewHeader">
              <span>发布人: admin</span>
              <span>发布时间: {this.state.time}</span>
            </div>
            <h5>
                {this.state.titleVal}
            </h5>
            <div className= 'hiddenScroll'>
              <div className="previewCenter" dangerouslySetInnerHTML={{__html: this.state.value}} />
            </div>
            <div className="previewFooter"> 
                <button onClick={this.previewSubmit}>保存</button>
                <button>返回</button>
            </div>
        </div>
    </div>
    
  );
}
}
export default Editor