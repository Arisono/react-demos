/**
 * Created by Arison on 2017/6/14.
 */
const exchangeRate = 6.9339
const currency = {
    '$': '美元',
    '￥': '人民币'
}

class CurrencyInput  extends React.Component{
    constructor(props){
      super(props)
        this.state={value:''}
        this.changeHandler=this.changeHandler.bind(this)
    }

    changeHandler(e){
        this.setState({
            value:e.target.value
        })
    }

    render(){
        return (
            <div>
                <label>
                    {currency[this.props.currency]}:
                    <input value={this.state.value} onChange={this.changeHandler}/>
                </label>
            </div>
        )
    }
}

class App extends React.Component {
    constructor (props) {
        super(props)
    }
    render () {
        return(
            <div>
                <CurrencyInput currency={'$'}/>
                <CurrencyInput currency={'￥'} />
                <p>我们有{}美元，也就是{}元</p>
            </div>
        )
    }
}

ReactDOM.render(
    <App/>
    ,
    document.getElementById("app")
)