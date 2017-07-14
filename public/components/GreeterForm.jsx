var React = require('react');


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

module.exports = StaticForm;
