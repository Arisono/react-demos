/**
 * Created by Arison on 2017/6/14.
 */
const exchangeRate = 6.9339
const vCurrency = {
    '$': '美元',
    '￥': '人民币'
}
//全局函数，方便全局和子组件能够访问
function exchange(value, type) {
    return value * (type === '$' ? exchangeRate : 1 / exchangeRate)
}

class CurrencyInput extends React.Component {
    constructor(props) {
        super(props)
        this.changeHandler = this.changeHandler.bind(this)
    }

    changeHandler(e) {
        this.props.onValueChange(e.target.value, this.props.currency)
    }

    render() {
        // 子组件在渲染时自己计算自己的状态
        let currentCurrency = this.props.currentCurrency//货币实体1  $
        let currency = this.props.currency//货币$
        let value = ''
        if (currentCurrency.value !== '' && !/^\s+$/g.test(currentCurrency.value)) {
            value = currentCurrency.type === currency ?
                currentCurrency.value : exchange(currentCurrency.value, currentCurrency.type)
        }
        return (
            <div>
                <label>
                    {vCurrency[currency]}:
                    <input value={value} onChange={this.changeHandler}/>
                </label>
            </div>
        )
    }
}

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            currentCurrency: {
                value: '',
                type: ''
            }
        }
        this.valueChangeHandler = this.valueChangeHandler.bind(this)
    }

    valueChangeHandler(value, type) {
        this.setState({
                currentCurrency: {
                    value, type
                }
            }
        )
    }

    render() {
        return (
            <div>
                <CurrencyInput currentCurrency={this.state.currentCurrency}
                               currency={'$'} onValueChange={this.valueChangeHandler}/>
                <CurrencyInput currentCurrency={this.state.currentCurrency}
                               currency={'￥'} onValueChange={this.valueChangeHandler}/>
                <p>我们有{exchange(this.state.currentCurrency.value, '$')}美元，
                    也就是{exchange(this.state.currentCurrency.value, '￥')}元</p>
            </div>
        )
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById("app")
)