/**
 * Created by Arison on 2017/6/14.
 */
/* 条件渲染*/
function UserGreeting (props) {
    return <h1>Hi,{props.name}, Welcome back!</h1>
}
function GuestGreeting () {
    return <h1>Please Sign up.</h1>
}
function Button (props) {
    return <button onClick={ props.handleToggler }>toggle me</button>
}

class App extends React.Component{
    constructor (props) {
        super(props)
        this.state = {
            prevState: false
        }
    }
    handleClick () {
        this.setState(prevState => ({ isLoggedIn: !prevState.isLoggedIn }))
    }

    render(){
        let greeting=this.state.isLoggedIn?<UserGreeting name={'JSON'}/>:<GuestGreeting/>
        return (
            <div>
              <div><Button handleToggler={this.handleClick.bind(this)}></Button></div>
                当前状态：{greeting}
            </div>
        )
    }
}

ReactDOM.render(<App isLoggedIn={true}></App>,document.getElementById("app"))