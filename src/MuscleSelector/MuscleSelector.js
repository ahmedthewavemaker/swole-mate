import React from 'react';
import {Link} from 'react-router-dom';
import './MuscleSelector.css'


function MuscleSelector() {

    return (
        <div className='muscle'>
            <div><h2><Link to="/exercise/chest">Chest <br />[image]</Link></h2></div>
            <div><h2><Link to="/exercise/back">Back <br />[image]</Link></h2></div>
            <div><h2><Link to="/exercise/shoulders">Shoulders <br />[image]</Link></h2></div>
            <div><h2><Link to="/exercise/arms">Arms <br />[image]</Link></h2></div>
            <div><h2><Link to="/exercise/legs">Legs <br />[image]</Link></h2></div>
            <div><h2><Link to="/exercise/miscellaneous">Miscellaneous <br />[image]</Link></h2></div>

        </div>


    )

}

export default MuscleSelector;