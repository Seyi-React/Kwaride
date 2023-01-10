import react from 'react'
import {BiCopyright} from 'react-icons/bi'





const Driver = () => {


    return <>
         <div className='driver'>
            <div>
           <div className='become'>
             <h3>Become a driver today! </h3>
           </div>
             <div>
                <p className='join'>Join a world class transport system today and <br/>Start earning by becoming a kwaride driver.</p>
             </div>
             <div>
                <button className='earn'>Start Earning</button>
             </div>
             </div>
         </div>
    
    </> 
}


const Footer = () => {
    return  (
        <>
        <div className='footer'>
          <div className='footer-sub'>
            <div className='footer-div'>
                <h1 className='footer-h1'>Kwaride</h1>
                <p className='footer-p'>Scheduling rides just got easier with kwaride,<br/>a comfortable,safe,reliable and fast transport<br/> experience,curious?find out more!</p>
            </div>
             <div>
                <h3 className='footer-h3'>Quick access</h3>
                <p>Home</p>
                <p>About Us</p>
                <p>Contact us</p>
                <p>Become a driver</p>
             </div>
             <div>
                <h3 className='footer-h3'>Services</h3>
                <p>Help center</p>
                <p>Schedule ride</p>
                <p>Terms and conditions</p>
                <p>Login/register</p>
             </div>
             <div className='footer-last'>
                <h3  className='footer-h3'>Contacts</h3>
                <p>Instagram</p>
                <p>Facebook</p>
                <p>Twitter</p>
             </div>
             
          </div>


          <h6><BiCopyright/> <br/>kwaride {new Date().getFullYear()} <br/>All right reserved.</h6>
        </div>
        </>
    )
}

export default Driver;
export {Footer};