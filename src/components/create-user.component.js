import React, { Component } from 'react';
import API from '../services/service';

export default class CreateUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: ''
    }
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const user = {
      username: this.state.username
    }

    API.CreateUser(user, (res) => {
      console.log(res.data);
      window.location = '/';
    });

    this.setState({
      username: ''
    })
  }

  render() {
    return (
      <div>
        <h3>Create New User</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Username: </label>
            <input type="text"
              required
              className="form-control"
              value={this.state.username}
              onChange={this.onChangeUsername.bind(this)}
            />
          </div>
          <div className="form-group">
            <input type="submit" value="Create User" className="btn btn-primary" onClick={this.onSubmit.bind(this)} />
          </div>
        </form>
      </div>
    )
  }
}