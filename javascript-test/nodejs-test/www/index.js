// React sample timer
var Timer = React.createClass({
  getInitialState: function()
  {
    return {secondsElapsed: 0};
  },
  tick: function()
  {
    this.setState({secondsElapsed: this.state.secondsElapsed + 1});
  },
  componentDidMount: function()
  {
    this.interval = setInterval(this.tick, 1000);
  },
  componentWillUnmount: function()
  {
    clearInterval(this.interval);
  },
  render: function()
  {
    return (
      <div>Seconds Elapsed: {this.state.secondsElapsed}</div>
    );
  }
});

var mount = React.render(<Timer />, document.body);


/*
// React sample todo list
var TodoList = React.createClass({
  render: function() {
    var createItem = function(itemText)
    {
      return <li>{itemText}</li>;
    };
    return <ul>{this.props.items.map(createItem)}</ul>;
  }
});
var TodoApp = React.createClass({
  getInitialState: function()
  {
    return {items: [], text: ''};
  },
  onChange: function(e)
  {
    this.setState({text: e.target.value});
  },
  handleSubmit: function(e)
  {
    e.preventDefault();
    var nextItems = this.state.items.concat([this.state.text]);
    var nextText = '';
    this.setState({items: nextItems, text: nextText});
  },
  render: function()
  {
    return (
      <div>
        <h3>TODO</h3>
        <TodoList items={this.state.items} />
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.onChange} value={this.state.text} />
          <button>{'Add #' + (this.state.items.length + 1)}</button>
        </form>
      </div>
    );
  }
});

var mount = React.render(<TodoApp />, document.body);
*/

/*
// React sample Hello John
var HelloComponent = React.createClass(
{
  render: function()
  {
    return <div>Hello {this.props.name}</div>;
  }
});

var mount = React.render(<HelloComponent name="John" />, document.body);
*/

// 自動計算表の表示
/*
var Component = React.createClass(
{
  getInitialState: function()
  { // 表計算アプリのマス目に相当する
    return {
      a: undefined,
      b: undefined
    };
  },
  handleChange: function(event)
  {
    var a = event.target.value * 1; // aのマス目の値
    this.setState({b: a * 5});      // bのマス目の値は、aのマス目の値の5倍と等しい
  },
  render: function()
    { // aのマス目の値を監視すると同時に
      return <div>
        <input type = "text" onChange = {this.handleChange} />
        <input type = "text" value = {this.state.b} />
        </div>;
    } //bのマス目はりアクティブに再計算され
});

var react1 = React.render( <Component/> , document.body);
// 宣言する。リアクティブに自動的にスクリーンに再描画される！！
*/
