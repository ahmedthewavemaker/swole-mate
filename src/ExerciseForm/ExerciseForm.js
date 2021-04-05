import React, { Component } from 'react';
import './ExerciseForm.css'
import { NavLink } from 'react-router-dom';
import AppContext from '../AppContext';
import config from '../config'



class ExerciseForm extends Component {

    state = {
        exercises: [],

    }




    static contextType = AppContext



    componentDidMount() {
        this.getWorkouts();

    }

    //3 functions of the requests (GET, POST, and DELETE)
    getWorkouts = () => {
        const email = this.context.email


        fetch(`${config.API_ENDPOINT}/api/workout/?email=${email}`)
            .then(res => res.json())
            .then(exercises => {

                this.setState({ exercises });
            })


    }

    postWorkout = (event) => {
        event.preventDefault();
        const { exercise, sets, reps } = event.target;

        const newWorkout = {
            email: this.context.email,
            muscle: this.props.match.params.muscle,
            exercise: exercise.value,
            reps: reps.value,
            sets: sets.value
        }

        fetch(`${config.API_ENDPOINT}/api/workout`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newWorkout)
        })
            .then(response => {
                this.getWorkouts()

            })
            .catch(error => {
                console.error(error)
            })
    }

    deleteWorkouts = (id) => {

        fetch(`${config.API_ENDPOINT}/api/workout/${id}`, {
            method: 'DELETE',

        })
           
            .then(exercises => {

                this.getWorkouts()
            })


    }


    render() {

        return (
            <div>
                <div>
                    <header>
                        <h1> Swole Mate </h1>
                    </header>


                    <div >
                        <ul className="nav">
                            <li><h3> <NavLink to="/exercise/chest">Chest</NavLink></h3></li>
                            <li><h3> <NavLink to="/exercise/back"> Back</NavLink></h3></li>
                            <li><h3> <NavLink to="/exercise/shoulders">Shoulders</NavLink></h3></li>
                            <li><h3> <NavLink to="/exercise/arms">Arms</NavLink></h3></li>
                            <li><h3> <NavLink to="/exercise/legs">Legs</NavLink></h3></li>
                            <li><h3> <NavLink to="/exercise/miscellaneous">Miscellaneous</NavLink></h3></li>
                        </ul>
                        <div>
                            <ol className='exerciseList'>
                                <li> {this.props.match.params.muscle} </li>
                            </ol>
                            <form onSubmit={this.postWorkout}>
                                <label htmlFor='exercise'>New Workout: </label>
                                <input name='exercise' id='exercise' type='text' />

                                <label htmlFor='sets'>Sets:  </label>
                                <input name='sets' id='sets' type='number' />

                                <label htmlFor='reps'>Reps:  </label>
                                <input name='reps' id='reps' type='number' />
                                <button className='buttonz'>Add Workout</button>

                            </form>

                            {this.state.exercises.filter(e => e.muscle == this.props.match.params.muscle).map(exercise => {
                                console.log(exercise)
                                return (


                                    <li className='exerciseList'>

                                    Workout: {exercise.exercise}----
                                    Sets: {exercise.sets}----  
                                     Reps: {exercise.reps}----
                                     Muscle: {exercise.muscle}----

                                        <button className='buttonz' onClick={e => this.deleteWorkouts(exercise.id)}>Delete Workout</button>
                                    </li>
                                )
                            })}

                        </div>

                    </div>
                </div>
            </div>
        )
    }
}
ExerciseForm.defaultProps={
    match: {
        params: {}
    }
}

export default ExerciseForm;
