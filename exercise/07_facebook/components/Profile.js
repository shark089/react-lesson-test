var Profile = React.createClass({
  getInitialState: function () {
    return {
      picture: '',
      name: '',
    };
  },

  componentDidMount: function () {
    FB.api('/me', { fields: ['picture.width(240)', 'name'] }, this.profileGet);
  },

  profileGet: function (rs) {
    this.setState({
      picture: rs.picture.data.url,
      name: rs.name,
    });
  },


  render: function () {
    return (
      <div className="profile">
          <img className="picture" src={this.state.picture}/>
          <div className="Name">{this.state.name}</div>
          <button onClick={this.props.logout}>Logout</button>
      </div>
    );
  },
});
