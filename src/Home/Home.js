import {FiAlignJustify} from 'react-icons/fi'
import React,{useState} from 'react';
// import Cars from './images/kwaride.jpeg'


const Kwaride = () => {

    const [show,setShow] = useState(true);
    return (
        <>
        <div>
            <div className='logo'>
                <h2 className="heading">Kwaride</h2>
            </div>
            <div className='icon'>
            <button className='icon-btn' onClick={()=> setShow(!show)}>{<FiAlignJustify />}</button>
            </div>
           {show ? (<div className='links'>
                <ul>
                    <li>
                        <a>Home</a>
                    </li>
                    <li>
                        <a>About Us</a>
                    </li>
                    <li>
                        <a>Contact us</a>
                    </li>
                    <li>
                        <a>Become a driver</a>
                    </li>
                </ul>
                <div className='btn-div'>
                    <button className='log-in'>Login</button>
                    <button className='register'>Register</button>
                </div>
            </div>) : null}
        </div>
        </>
    )
}

// const Car = () => {

//     return (
//         <main>
//             <div>
//                 <img src={Cars} alt='car-img' className='car-img' />
//             </div>
//         </main>
//     )
// }


export default Kwaride;
// export {Car};