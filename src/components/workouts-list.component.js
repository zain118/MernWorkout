import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import API from '../services/service';

const Workout = props => (
  <tr>
    <td>{props.workout.username}</td>
    <td>{props.workout.description}</td>
    <td>{props.workout.duration}</td>
    <td>{props.workout.date.substring(0, 10)}</td>
    <td>
      <Link to={"/edit/" + props.workout._id}>edit</Link> | <a href="#" onClick={() => { props.deleteWorkout(props.workout._id) }}>delete</a>
    </td>
  </tr>
)

export default class WorkoutsList extends Component {
  constructor(props) {
    super(props);
    this.state = { workouts: [] };
  }

  componentDidMount() {
    API.GetWorkouts(response => {
      this.setState({ workouts: response.data })
    });
  }

  deleteWorkout(id) {
    API.DeleteWorkout(id, response => {
      console.log(response.data);
    });

    this.setState({
      workouts: this.state.workouts.filter(el => el._id !== id)
    });
  }

  workoutList() {
    return this.state.workouts.map(currentworkout => {
      return <Workout workout={currentworkout} deleteWorkout={this.deleteWorkout.bind(this)} key={currentworkout._id} />;
    })
  }

  render() {
    return (
      <div>
        <h3>Logged Workouts</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Username</th>
              <th>Description</th>
              <th>Duration</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.workoutList()}
          </tbody>
        </table>
      </div>
    )
  }
}