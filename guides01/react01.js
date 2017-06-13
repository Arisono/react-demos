/**
 * Created by Arison on 2017/6/13.
 */

//方式一
//const element = (
//    <h1 className="greeting"> hello word!</h1>
//);
//方式二
//const element = React.createElement('h2', {className: 'greeting'}, 'Hello Word!');
//方式三
const element = <h1>Hello, world</h1>;

//此方式验证不通过，不能进行render操作
 //const  element={
 //    type:'h3',
 //    props:{
 //        className:'greeting',
 //        children:'hello,Arison!'
 //    }
 //};


//Rendering an Element into the DOM
ReactDOM.render(element, document.getElementById("app"));












