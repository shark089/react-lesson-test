var TodoList = React.createClass({
  getInitialState: function () {
    return {
      list: [
        { id: 1, text: '1個', number:0, done: false },
        { id: 2, text: '2個', number:0, done: false },
        { id: 3, text: '3個', number:0, done: false },
      ],
    };
  },

  addItem: function (text,text2) {
    var item = {
      id: this.state.list.length + 1,
      text: text,
      done: false,
      number:text2,
    };
    var list = this.state.list.concat(item);
    this.setState({
      list: list,
    });
  },

  toggleItem: function (id) {
    var list = this.state.list.map(function (item) {
      return item.id !== id ? item : {
        id: item.id,
        text: item.text,
        done: !item.done,
        number:test2,
      };
    });
    this.setState({
      list: list,
    });
  },

  sortUp: function(){   //預留button onclick事件
    var list = this.state.list.sort(function(){return a.number - b.number});
    this.setState({
      list:list,
    })
  },

  sortDown: function(){
    var list = this.state.list.sort(function(){return b.number - a.number});
    this.setState({
      list:list,
    })
  },

  render: function () {
    var toggleItem = this.toggleItem;
    return (
      <div className="todo-list">
        <TodoForm addItem={this.addItem} />
        <button className="button">升序</button>
        <button className="button">降序</button>
        <ul className="todo-items">
          {
            this.state.list.map(function (item) {
              return (
                <TodoItem
                  id={item.id}
                  done={item.done}
                  key={item.id}
                  toggleItem={toggleItem}
                  >
                  {item.text}
                  {item.number}
                </TodoItem>
              );
            })
          }
        </ul>
      </div>
    );
  },
});
