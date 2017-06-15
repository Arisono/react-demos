/**
 * Created by Arison on 2017/6/14.
 */
class Form extends React.Component {
    constructor (props) {
        super(props)
        this.state ={
            inputTextValue: ''
        }
        this.handleInputTextChange = this.handleInputTextChange.bind(this)
    }
    render () {
        return (
            <form>
                <input
                    value={this.state.inputTextValue} // 从state中将值绑定到表单元素
                    onChange={this.handleInputTextChange}/>
            </form>
        )
    }
    handleInputTextChange (e) {
        this.setState({
            inputTextValue: e.target.value // 将表单元素的值的变化映射到state中
        })
    }
}

ReactDOM.render(
    <Form />,
    document.getElementById('app')
)