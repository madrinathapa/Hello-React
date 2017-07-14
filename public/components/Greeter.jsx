var React = require('react');
var GreeterMsg = require('GreeterMessage');
var StaticForm = require('GreeterForm');

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

module.exports = Greeter;
