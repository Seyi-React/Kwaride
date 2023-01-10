import React from "react";
import {AiFillStar} from 'react-icons/ai'
import {AiOutlineStar} from 'react-icons/ai'
import {AiOutlineRight} from 'react-icons/ai'
import {ImLocation} from 'react-icons/im'
import {GiPayMoney} from 'react-icons/gi'
import {FaCarSide} from 'react-icons/fa'


const Book = () => {

    return <>
     <div className="book-div">
        <div className="booking">
          <div>
            <h1>Book your next trip in <br/> 3 easy steps</h1>
          </div>
          <div className="grid">
            <div className="books">
                <p><ImLocation className="orange"/></p>
                1.Set your destination
                </div>
        
           <div className="books">
            <p><GiPayMoney className="steps"/></p>
            2.Make payment
            </div>

            <div className="books">
               <p><FaCarSide className="steps"/></p> 
                3.Wait for your driver
                </div>

          </div>
         </div>
         <p className="download">For a fast and easy ride scheduling <br/> experience,download the kwaride app </p>
     </div>
    
    </>
}

const Download = () => {

    return <>
      <div className="download-container">
        <div className="store-div">
          <section className="store">
            <h5 className="available">Available on google playstore</h5>
            <p>4.8/5 <AiFillStar className="green"/> <AiFillStar  className="green" /> <AiFillStar  className="green"/> <AiFillStar  className="green"/> <AiOutlineStar className="outline"/> </p>
             <p className="p-store">"The kwaride app is such a time saving and easy<br/> to use app,i really love the app<br/> before this time".<h6>Bolaji John,December{new Date().getFullYear()}</h6></p>
             <span>download now <AiOutlineRight/> </span>
          </section>

          <section className="store">
          <h5 className="available">Available on apple playstore</h5>
            <p>4.8/5 <AiFillStar className="green" /> <AiFillStar className="green" /> <AiFillStar  className="green" /> <AiFillStar  className="green" /> <AiOutlineStar className="outline"/> </p>
             <p className="p-store">"it was a nice experience with kwaride,ranging from their <br/>nice app interface to their services,i'd recommend them<br/> anywhere anytime.<h6>Schuff Morgan,November{new Date().getFullYear()}</h6></p>
             <span>download now <AiOutlineRight/> </span>
          </section>


        </div>
      </div>
    </>
}

export default Book;
export {Download};