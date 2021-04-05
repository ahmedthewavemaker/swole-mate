import React from 'react';
import {Link} from 'react-router-dom';
import './MuscleSelector.css';
import back from '../images/back.jpg'
import chest from '../images/chest.jpg'
import shoulders from '../images/shoulders.jpg'
import arms from '../images/arms.jpg'
import legs from '../images/legs.jpg'
import misc from '../images/misc.jpg'




function MuscleSelector() {

    return (
        <div className='muscle'>
            <div className='chest'><h2><Link to="/exercise/chest">Chest <br /><img className='chestImage 'src={chest} alt='gym'/></Link></h2></div>
            <div className='back'><h2><Link to="/exercise/back">Back <br/> <img className='backImage 'src={back} alt='gym'/></Link></h2></div>
            <div className='shoulders'><h2><Link to="/exercise/shoulders">Shoulders <br/> <img className='shouldersImage 'src={shoulders} alt='gym'/></Link></h2></div>
            <div className='arms'><h2><Link to="/exercise/arms">Arms <br/> <img className='armsImage 'src={arms} alt='gym'/></Link></h2></div>
            <div className='legs'><h2><Link to="/exercise/legs">Legs <br/> <img className='legsImage 'src={legs} alt='gym'/></Link></h2></div>
            <div className='misc'><h2><Link to="/exercise/miscellaneous">Miscellaneous <br/> <img className='miscImage 'src={misc} alt='gym'/></Link></h2></div>

        </div>


    )

}

export default MuscleSelector;