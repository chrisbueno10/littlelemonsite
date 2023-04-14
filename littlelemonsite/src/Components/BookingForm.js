import React, { useEffect, useState } from "react";

function BookingForm(props) {
  
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("Birthday");
  const [isFormValid, setIsFormValid] = useState(false)

  useEffect(() => {
    setIsFormValid(props.selectedDate !== "" && time !== "");
  }, [props.selectedDate, time])

  function handleTimeChange(event) {
    setTime(event.target.value);
  }

  function handleGuestsChange(event) {
    setGuests(event.target.value);
  }

  function handleOccasionChange(event) {
    setOccasion(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    props.submitForm([props.selectedDate, time, guests, occasion]);
    console.log(props.selectedDate, time, guests, occasion)
  }

  return (
    <form 
      id="booking-form" 
      onSubmit={handleSubmit}
      aria-label="booking form"
    >
      <h1 id="booking-form-title" className="markazi subtitle">Booking Form</h1>
      <div id="booking-form-inner">
        <label htmlFor="res-date">Choose date</label>
        <input
          type="date"
          value={props.selectedDate}
          onChange={props.handleDateChange}
          id="res-date"
          aria-label="date of appointment"
          required
        />
        <label htmlFor="res-time">Choose time</label>
        {/* <table>
          <tbody>
            <tr key={time.time}>
              {props.availableTimes.map(time => (
                  <td key={time.time} >
                    {time.time}
                  </td>
              ))}
            </tr>
          </tbody>
        </table> */}
        <select 
          value={time}
          onChange={handleTimeChange}
          aria-label="time of appointment"
          required>
            {props.availableTimes.map(time => (
              <option key={time.time} value={time.time}>
                {time.time}
              </option>
            ))}
        </select>
        <label htmlFor="guests">Number of guests</label>
        <input
          type="number"
          placeholder="1"
          min="1"
          max="10"
          id="guests"
          value={guests}
          onChange={handleGuestsChange}
          aria-label="number of guests"
          required
        />
        <label htmlFor="occasion">Occasion</label>
        <select id="occasion" value={occasion} onChange={handleOccasionChange} aria-label="occasion" required>
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>
        <input type="submit" value="Make your reservation" disabled={!isFormValid} aria-label="submit form" />
      </div>
    </form>
  );
}

export default BookingForm;