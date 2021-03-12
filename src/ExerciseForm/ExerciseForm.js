import React from 'react';
import './ExerciseForm.css'
import { Link, Route } from 'react-router-dom';
import chest from './chest'
import back from './back'
import shoulders from './shoulders'
import arms from './arms'
import legs from './legs'
import miscellaneous from './miscellaneous'

function ExerciseForm() {
    return (
        <div>
            <header>
                <h1> Swole Mate </h1>
            </header>


            <div >
                <ul className="nav">
                    <li ><h3><Link to="/exercise/chest">Chest</Link></h3></li>
                    <li><h3><Link to="/exercise/back"> Back</Link></h3></li>
                    <li><h3> <Link to="/exercise/shoulders">Shoulders</Link></h3></li>
                    <li><h3> <Link to="/exercise/arms">Arms</Link></h3></li>
                    <li><h3> <Link to="/exercise/legs">Legs</Link></h3></li>
                    <li><h3> <Link to="/exercise/miscellaneous">Miscellaneous</Link></h3></li>
                </ul>

                <div class="list">
                    <Route
                        path="/exercise/chest"
                        component={chest}
                    />

                    <Route
                        path="/exercise/back"
                        component={back}
                    />

                    <Route
                        path="/exercise/shoulders"
                        component={shoulders}
                    />

                    <Route
                        path="/exercise/arms"
                        component={arms}
                    />

                    <Route
                        path="/exercise/legs"
                        component={legs}
                    />

                    <Route
                        path="/exercise/miscellaneous"
                        component={miscellaneous}
                    />
                </div>
            </div>
        </div>
    );
}
export default ExerciseForm;