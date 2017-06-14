/**
 * Created by Arison on 2017/6/14.
 */
/*生命周期*/
//写法一
//function Clock(props){
//
//    return (
//        <div>
//            <h1>Hello,word!</h1>
//            <h2>It is {props.date.toLocaleTimeString()}</h2>
//         </div>
//    );
//}

//写法二
//class Clock extends React.Component{
//
//    render(){
//        return (
//        <div>
//            <h1>Hello,word!</h1>
//            <h2>It is {this.props.date.toLocaleTimeString()}</h2>
//         </div>
//        );
//    }
//}

function FormattedDate(props) {
    return <h2>It is {props.date.toLocaleTimeString()}</h2>;
}

class Clock extends React.Component{
    /*构造方法*/
    constructor(props){
       super(props);
        this.state={date:new Date()};
    }

    componentDidMount(){
        this.timerID=setInterval(()=>this.tick(),1000)
        //this.interval=setInterval(this.tick(),1000)
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick(){
        this.setState({
            date:new Date()
        });
    }

    render(){
        return (
        <div>
            <h1>Hello,word!</h1>
            <h3>第一种写法</h3>
            <h2>It is {this.state.date.toLocaleTimeString()}</h2>
            <h3>第二种写法</h3>
            <FormattedDate date={this.state.date}></FormattedDate>
         </div>
        );
    }
}

function App() {
    return (
        <div>
            <Clock />
            <Clock />
            <Clock />
        </div>
    );
}


ReactDOM.render(
    /*    <Clock date={new Date()}></Clock>,*/
  <App></App>,
    document.getElementById("app")
);

//function titck(){
//    ReactDOM.render(
//    /*    <Clock date={new Date()}></Clock>,*/
//        <Clock ></Clock>,
//        document.getElementById("app")
//    );
//}
//
//setInterval(titck,1000);