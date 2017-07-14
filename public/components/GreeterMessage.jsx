var React = require('react');

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

module.exports = GreeterMsg;
