import React, { Component } from 'react';
import './Landing.css';
import AppContext from '../AppContext'
import { render } from '@testing-library/react';



class Landing extends Component {
    static contextType = AppContext

    getWorkouts = (event) => {
        event.preventDefault();

        this.context.setEmail(event.target.email.value)
        this.props.history.push('/muscle')
    }

    render() {


        return (

            <div>

                <article className="intro"> Ever go the the gym and feel like you are missing a workout? Ever go to the gym and forget the routine you are supposed to implement that day? Don't you wish you had a checklist that you can just look at instead of trying to remember which workouts you need to do as other uninvited thoughts rush your head?  </article>

                <h2>You are not alone! </h2> <section> Presenting the Swole Mate! Your personal side-kick/guide that ensures you never skip a workout again! </section>

                <p> [placeholder for gym image] </p>

                <h3>Sign up now to get swole!</h3>
                <form onSubmit={this.getWorkouts}><div>

                    <label htmlFor="email">email: </label>
                    <input placeholder="email@website.com" type="text" name="email" id="email" />
                    <button>Send</button>
                </div></form>
            </div>
        );
    }
}

export default Landing;