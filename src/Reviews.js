import React, { useState } from "react";
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Reviews = () => {
    const [index, setIndex] = useState(0)
    const { name, image, job, text } = people[index];

    // Check number b/c give error so check by if

    const checkNumber = (number) => {
        if (number > people.length - 1) {
            return 0; 
        }
        if (number < 0) {
            return people.length - 1;
        }
        return number;
    }
    const nextPerson = () => {
        setIndex((index) => {
            let newIndex = index + 1;
            return checkNumber(newIndex);
        });
    };

    const prevPerson = () => {
        setIndex((index) => {
            let newIndex = index - 1;
            return checkNumber(newIndex);
        });
    };

    //  gives person is random 
    const randomPerason = () => {
        // console.log(Math.random());    b/c give one img is multiple times
        let randomNumber = Math.floor(Math.random() * people.length);
        if(randomNumber === index){
            randomNumber = index + 1
        }
        setIndex(checkNumber(randomNumber));
    }

    return (
        <article className="review">
            <div className="img-container">
                <img src={image} alt={name} className="person-img" />
                <span className="quote-icon">
                    <FaQuoteRight />
                </span>
            </div>
            <h4 className="author">{name}</h4>
            <p className="job">{job}</p>
            <p className="info">{text}</p>
            <div className="buttom-container">
                <button className="prev-btn" onClick={prevPerson}>
                    <FaChevronLeft />
                </button>
                <button className="next-btn" onClick={nextPerson}>
                    <FaChevronRight />
                </button>
            </div>
            <button className="random-btn" onClick={randomPerason}>suprise me</button>
        </article>

    )
};

export default Reviews;