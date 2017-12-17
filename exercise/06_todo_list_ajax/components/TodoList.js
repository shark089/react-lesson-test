
axios.default.withCredentials = true;


var TodoList = React.createClass({
  getInitialState: function () {
    return {
      list: [
        // { id: 1, text: 'buy 1 apple', done: false },
        // { id: 2, text: 'buy 1 pen', done: false },
        // { id: 3, text: 'buy 1 apple-pen', done: true },
      ],
    };
  },
  componentDidMount: function () {
    axios.get(this.props.url).then(this.setList);
  },
  setList: function (response) {
    this.setState({
      list: response.data,
    });
  },

  addItem: function (text) {
    axios.post(this.props.url, { text: text }).then(this.setList);
  },
  toggleItem: function (id) {
    axios.put(this.props.url + id).then(this.setList);

    // for (var i = 0; i < this.state.list.length; i += 1) {
    // var item = this.state.list[i];
    // if (item.id === id) {
    // item.done = !item.done;
    // break;
    // }
    // }
    // this.forceUpdate();
  },
  render: function () {
    var toggleItem = this.toggleItem;
    return (
      <div className="todo-list">
        TodoList
        <TodoForm addItem={this.addItem}/>
        <ul>
          {this.state.list.map(function (item) {
            return <TodoItem
            done={item.done}
            id={item.id}
            toggleItem={toggleItem}
            >
            {item.text}
            </TodoItem>;
          })}
        </ul>
      </div>
    );
  },
});
