/**
 * Created by Arison on 2017/6/13.
 */
function formatDate(date) {
    return date.toLocaleDateString();
}
//声明一个react element
const comment = {
    date: new Date(),
    text: 'I from china',
    author: {
        name: 'Hello Kitty',
        avatarUrl: 'http://placekitten.com/g/64/64'
    }
};
// 默认是声明了一个react 组件
function Comment(props) {
    return (
        <div className="Commemt">
            <div className="UserInfo">
                <img className="Avatar" src={props.author.avatarUrl} alt={props.author.name}/>
                <div className="UserInfo-name">{props.author.name}</div>
            </div>

            <div className="Comment-text">
                {props.text}
            </div>

            <div className="Comment-date">
                {formatDate(props.date)}
            </div>
        </div>
    );
}
//组件传值问题
ReactDOM.render(<Comment date={comment.date} text={comment.text} author={comment.author}>
</Comment>, document.getElementById("app"));
