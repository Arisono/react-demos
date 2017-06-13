/**
 * Created by Arison on 2017/6/13.
 */
/*  react 组件知识（一） */
/*不能render,声明一个组件 */
//function Welcome(props) {
//    return <h1>Hello, {props.name}</h1>;
//}
//生命一個組件
class Welcome extends React.Component{
    render(){
        return <h1>Hello,{this.props.name}</h1>;
    }
}

const  element=<Welcome name='組件声明'/>

ReactDOM.render(element,document.getElementById("app"));