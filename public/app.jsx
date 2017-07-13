var GreeterMsg = React.createClass({
  render:function(){
    var name = this.props.name;
    var msg = this.props.msg;
    return(
      <div>
        <h2>Hello {name} :)</h2>
        <p>{msg}.. This is yet another p tag!</p>
      </div>
    );
  }
});

var StaticForm = React.createClass({
  onFormSubmit:function(e){
    e.preventDefault();
    var name = this.refs.name.value;
    if(name.length>0){
      this.refs.name.value='';
      this.props.onNewName(name);
    }
  },
  render:function(){
    return (
      <form onSubmit={this.onFormSubmit}>
        <input type="text" ref="name"/>
        <button>Change Name</button>
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
      name:this.props.name
    };
  },
  handleNewName: function(name){
      this.setState({
        name:name
      });
  },
  render:function(){
    var name = this.state.name;
    var msg = this.props.msg;

    return (
      <div>
        <GreeterMsg name={name} msg={msg}/>
        <StaticForm onNewName={this.handleNewName}/>
      </div>
    );
  }
});

ReactDOM.render(
  <Greeter name="Madrina" msg="The message is here."/>,
  document.getElementById('app')
);
