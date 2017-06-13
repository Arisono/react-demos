/**
 * Created by Arison on 2017/6/13.
 */
/*  react 组件知识（二） */
function Welcome(props){
    return <h1>Hi,{props.name}</h1>;
}

function  App(){

    return (
        <div>
            <Welcome name='组件一'/>
            <Welcome name='组件二'/>
            <Welcome name='组件三'/>
        </div>
    );
}

ReactDOM.render(<App />,document.getElementById("app"));