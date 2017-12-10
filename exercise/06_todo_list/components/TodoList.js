var TodoList = React.createClass({
  getInitialState: function () {
    return {
      list: [
        { id: 1, text: 'buy 1 apple', done: false },
        { id: 2, text: 'buy 1 pen', done: false },
        { id: 3, text: 'buy 1 apple-pen', done: true },
      ],
    };
  },
  addItem: function (text) {
    var item = {
      id: this.state.list.length + 1,
      text: text,
      done: false,
    };
    this.setState({
      list: this.state.list.concat(item),
    });
  },
  toggleItem: function (id) {
    var list = this.state.list.map(function (item) {
      return (item.id !== id) ? item : {
        id: item.id,
        text: item.text,
        done: !item.done,
      };
    });
    this.setState({
      list: list,
    });
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
