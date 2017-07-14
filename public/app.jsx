var React = require('react');
var ReactDOM = require('react-dom');

var GreeterMsg = React.createClass({
  render:function(){
    var name = this.props.name;
    var msg = this.props.msg;
    return(
      <div>
        <h2>Hello {name} :)</h2>
        <p>{msg}!</p>
      </div>
    );
  }
});

var StaticForm = React.createClass({
  onFormSubmit:function(e){
    e.preventDefault();

    var updates={};
    var name = this.refs.name.value;
    var msg = this.refs.msg.value;

    if(name.length>0){
      this.refs.name.value='';
      updates.name = name;
    }

    if(msg.length>0){
      this.refs.msg.value='';
      updates.msg = msg;
    }
    this.props.onNewData(updates);
  },
  render:function(){
    return (
      <form onSubmit={this.onFormSubmit}>
        <div>
          <input type="text" ref="name" placeholder="Enter a new name"/><br/><br/>
          <textarea rows="4" cols="40" ref="msg" placeholder="Enter a new message"></textarea><br/><br/>
          <button>Update</button>
        </div>
      </form>
    )
  }
});

var Greeter = React.createClass({
  getDefaultProps: function(){
    return{
      name:'React',
      msg:'The default message'
    };
  },
  getInitialState: function(){
    return{
      name:this.props.name,
      msg:this.props.msg
    };
  },
  handleNewData: function(updates){
      this.setState(updates);
  },
  render:function(){
    var name = this.state.name;
    var msg = this.state.msg;

    return (
      <div>
        <GreeterMsg name={name} msg={msg}/>
        <StaticForm onNewData={this.handleNewData}/>
      </div>
    );
  }
});

ReactDOM.render(
  <Greeter name="Madrina" msg="The message is here."/>,
  document.getElementById('app')
);
