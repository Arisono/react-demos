/**
 * Created by Arison on 2017/6/14.
 */
/* 列表 */
class List extends React.Component {
    constructor (props) {
        super(props)
    }
    render () {
        let list = this.props.number.map(number => ( // 拼装li
            <li key={number.toString()}>{number}</li>
        ))
        return (
            <ul>{list}</ul>
        )
    }
}

ReactDOM.render(
    <List number={[1, 2, 3, 4, 5]} />,
    document.getElementById('app')
)
