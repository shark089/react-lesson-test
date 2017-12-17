var TodoForm = React.createClass({
  onSubmit: function (e) {
    e.preventDefault();
    var text = this.input.text;
    var text2 = this.input.number;
    this.input.value = '';
    this.input.value = '1';
    this.props.addItem(text,text2);
  },

  inputRef: function (input) {
    this.input.text = input;
  },
  inputRef2: function (input) {
    this.input.number = input;
  },


  render: function () {
    return (
      <div className="form-div">
      <form className="todo-form" onSubmit={this.onSubmit}>
        <input type="text" ref={this.inputRef}/>
      </form>
      <form className="todo-form" onSubmit={this.onSubmit}>
        <input type="number" ref={this.inputRef2}/>
      </form>
      </div>
      
    );
  },
});