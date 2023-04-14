//import {Link} from "react-router-dom";
import React from "react";
import { useState, useReducer } from "react";
import { Routes, Route, useNavigate } from 'react-router-dom';

import '../App.css';
import About from './About';
import Highlights from "./Highlights";
import Hero from "./Hero";
import Testimonials from "./Testimonials";
import BookingForm from './BookingForm';
import ConfirmedBooking from './ConfirmedBooking';
export default function Main(){
    const [selectedDate, setSelectedDate] = useState("");
    const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);

    function handleDateChange(event) {
        setSelectedDate(event.target.value);
        dispatch({ type: "UPDATE_TIMES", payload: event.target.value });
    }

    const navigate = useNavigate();

    function submitForm(formData) {
        const confirmation = submitAPI(formData);

        if (confirmation) {
            navigate('/confirmation')
        }
    }

    return(
        <div className="main">
            <Routes>
                <Route path='/' element={
                    <>
                        <Hero />
                        <Highlights />
                        <Testimonials />
                        <About />
                    </>
                } />
                <Route path='/booking' element={
                    <BookingForm
                        selectedDate={selectedDate}
                        availableTimes={availableTimes}
                        handleDateChange={handleDateChange}
                        submitForm={submitForm}
                    />
                } />
                <Route path='/confirmation' element={
                    <ConfirmedBooking />
                } />
            </Routes>
        </div>
    );
}
const seededRandom = function (seed) {
    var m = 2**35 - 31;
    var a = 185852;
    var s = seed % m;
    return function () {
        return (s = s * a % m) / m;
    };
}
export function initializeTimes(date) {
    const times = fetchAPI(date)
    
    const result = times.map((time) => ({
        time: time,
        available: true
    }));
    return result;
}
const fetchAPI = function(date) {
    let result = [];
    let random = seededRandom(new Date()); //why won't date.getDate() work???

    for(let i = 17; i <= 23; i++) {
        if(random() < 0.5) {
            result.push(i + ':00');
        }
        if(random() < 0.5) {
            result.push(i + ':30');
        }
    }

    return result;
};

const submitAPI = function(formData) {
    return true;
};

export function updateTimes(state, action) {
    switch (action.type) {
        case "UPDATE_TIMES":
            return initializeTimes(action.payload);
        default:
            return state;
    }
}