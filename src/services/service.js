import axios from 'axios';
function CreateUser(user, callback) {
    axios.post('http://localhost:5000/users/add', user)
        .then(res => {
            callback(res);
        }).catch((error) => {
            alert(error);
        })
}

function GetWorkouts(callback) {
    axios.get('http://localhost:5000/workouts/')
        .then(response => {
            callback(response);
        })
        .catch((error) => {
            alert(error);
        });
}

function CreateWorkout(workout, callback) {
    axios.post('http://localhost:5000/workouts/add', workout)
        .then(res => {
            callback(res);
        })
        .catch((error) => {
            alert(error);
        });
}

function GetWorkout(id, callback) {
    axios.get('http://localhost:5000/workouts/' + id)
        .then(response => {
            callback(response);
        })
        .catch(function (error) {
            alert(error);
        });
}

function GetUsers(callback) {
    axios.get('http://localhost:5000/users/')
        .then(response => {
            callback(response);
        })
        .catch(function (error) {
            alert(error);
        });
}

function UpdateWorkout(id, workout, callback) {
    axios.post('http://localhost:5000/workouts/update/' + id, workout)
        .then(response => {
            callback(response);
        })
        .catch(function (error) {
            alert(error);
        });
}

function DeleteWorkout(id, callback) {
    axios.delete('http://localhost:5000/workouts/'+id)
      .then(response => {
            callback(response);
        })
        .catch(function (error) {
            alert(error);
        });
}

export default {
    CreateUser,
    GetWorkouts,
    CreateWorkout,
    GetWorkout,
    GetUsers,
    UpdateWorkout,
    DeleteWorkout
}
