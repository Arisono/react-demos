/**
 * Created by Arison on 2017/6/14.
 */
    /*事件监听*/
class Toggle extends  React.Component{
    constructor(props){
        super(props);
        this.state={isToggle:true};
        this.handleClick=this.handleClick.bind(this);
    }

    handleClick(){
       this.setState(prevState=>(
       {
           isToggle:!prevState.isToggle
       }
       ));
    }

    render() {
       return (
           <button onClick={this.handleClick}>
               {this.state.isToggle ? 'ON':'OFF'}
           </button>
       )
    };
}

ReactDOM.render(
    <Toggle />,
    document.getElementById('app')
);