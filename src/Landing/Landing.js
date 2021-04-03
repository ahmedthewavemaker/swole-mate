import React, { Component } from 'react';
import './Landing.css';
import AppContext from '../AppContext'
import { render } from '@testing-library/react';
import dumbells from '../images/dumbells.jpg'



class Landing extends Component {
    static contextType = AppContext

    getWorkouts = (event) => {
        event.preventDefault();

        this.context.setEmail(event.target.email.value)
        this.props.history.push('/muscle')
    }

    render() {


        return (

            <div className="wrapper">

                <article className="intro"> Ever go the the gym and feel like you are missing a workout? <br/> Ever go to the gym and forget the routine you are supposed to implement that day?<br/> Don't you wish you had a checklist that you can just look at instead of trying to remember which workouts you need to do as other uninvited thoughts rush your head?<br/>  </article>

                <h2>YOU ARE NOT ALONE! </h2> <section> Presenting the Swole Mate! Your personal side-kick/guide that ensures you never skip a workout again! </section>

                {/* <img src={dumbells} alt='dumbells' /> */}

                <h3>Sign up now to get swole!</h3>
                <form onSubmit={this.getWorkouts}><div>

                    <label className="form" htmlFor="email">Email: </label>
                    <input placeholder="email@website.com" type="text" name="email" id="email" />
                    <button className='buttonz'>Send</button>
                </div></form>
            </div>
        );
    }
}

export default Landing;