import react from 'react'
import {MdStars} from 'react-icons/md'


const Section = () => {


    return (

        <>
        <div className='section-div'>
            <div className='optimize'>
                <h1>Optimizing <br/>Transportation <br/> Experience</h1>
            </div>
            <div className='section-p'>
                <h3>Kwaride is a unique,fast and easy transport experience perfectly built for you</h3>
            </div>
            <div className='section-btn'>
                <button>Schedule Ride Now</button>
            </div>
            <div className='where'>
                <h3>Where do you want to go?</h3>
            </div>
        </div>
        
        </>
    )

    }

    const  Location = () => {

        return (
            <> 
            <div className='locate'>
              <section className='section'>
                <label className='current-current'>current location</label>
                 <input type='text' placeholder='Ibrahim Taiwo Rd' className='current' />
                 <label className='destination-destination'>destination</label>
                 <input type='text' placeholder='Unilorin multipurpose hall' className='destination'/>
                 <label className='date-date'>pickup time</label>
                 <input type='date'  className='date'/>
                 <label className='label-time'>-----------</label>
                 <input type='time'  className='time'/>
              </section>
              <div className='ride'>
              <button className='ride-btn'><MdStars />Schedule Ride </button>
              </div>
              <div className='harsh'>
                <div className='black'>
                   <p><MdStars /></p>
                   </div>
                <div className='yellow'>
                 <p><MdStars /></p>
                </div>
                <div className='green'>
                    <p><MdStars /></p>
                </div>
              </div>
              <div className='why'>
                <h3>Why should you trust us?</h3>
              </div>
            </div>
            </>
        )
    }

    export default Section;
    export {Location};
