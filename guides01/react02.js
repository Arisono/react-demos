/**
 * Created by Arison on 2017/6/13.
 */
function tick(){
    const  elemnt=(<div>
        <h1>Hello</h1>
        <h2>it is {new Date().toLocaleTimeString()}.</h2>
    </div>);
    ReactDOM.render(elemnt,document.getElementById("app"));
}
setInterval(tick, 1000);
