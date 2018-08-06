import React from 'react';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  render () {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          Please {this.props.formType} or {this.props.navLink}

          <label>Username:
            <input
              value={this.state.username}
              onChange={this.update('username')}
              type="text"/>
          </label>
          <label>Password:
              <input
                value={this.state.password}
                onChange={this.update('password')}
                type="password"/>
          </label>
          <input type="submit" value={this.props.formType}></input>
        </form>
      </div>
    );
  }
};

export default SessionForm;
