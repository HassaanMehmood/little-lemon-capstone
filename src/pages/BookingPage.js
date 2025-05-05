// src/pages/BookingPage.js
import React, { useEffect, useReducer, useState } from "react";
import { useNavigate } from "react-router-dom";
import BookingForm from "../components/BookingForm";
import { fetchAPI, submitAPI } from "../api/api";

// Reducer to manage available times
function timesReducer(state, action) {
  switch (action.type) {
    case "SET_TIMES":
      return action.times;
    default:
      return state;
  }
}

export default function BookingPage() {
  const [date, setDate] = useState("");
  const [availableTimes, dispatch] = useReducer(timesReducer, []);
  const navigate = useNavigate();

  // On mount: load today’s available times
  useEffect(() => {
    const today = new Date();
    const times = fetchAPI(today);
    dispatch({ type: "SET_TIMES", times });
  }, []);

  // Called when the date changes, update available times
  const updateTimes = (selectedDate) => {
    const times = fetchAPI(new Date(selectedDate));
    dispatch({ type: "SET_TIMES", times });
  };

  // Form submission handler
  const submitForm = (formData) => {
    const success = submitAPI(formData);
    if (success) {
      // Save booking to local storage
      const existingBookings =
        JSON.parse(localStorage.getItem("bookings")) || [];
      const updatedBookings = [...existingBookings, formData];
      localStorage.setItem("bookings", JSON.stringify(updatedBookings));

      // Navigate to confirmation page
      navigate("/confirmed-booking");
    } else {
      alert("Failed to submit. Please try again.");
    }
  };

  return (
    <section className="main">
      <h1>Book a Table</h1>
      <BookingForm
        date={date}
        setDate={setDate}
        availableTimes={availableTimes}
        updateTimes={updateTimes}
        submitForm={submitForm}
      />
    </section>
  );
}

// import React, { useReducer, useState } from "react";
// import BookingForm from "../components/BookingForm";

// // Reducer function to handle available times state
// function timesReducer(state, action) {
//   switch (action.type) {
//     case "UPDATE_TIMES":
//       // For simplicity, we are not changing available times based on date here
//       // In the future, this logic could change the available times based on the date selected
//       return [...state]; // return the same times (you can update the logic later)
//     default:
//       return state;
//   }
// }

// function BookingPage() {
//   // State for selected date
//   const [date, setDate] = useState("");
//   // UseReducer for available times
//   const [availableTimes, dispatch] = useReducer(timesReducer, [
//     "17:00",
//     "18:00",
//     "19:00",
//     "20:00",
//     "21:00",
//   ]);

//   // Function to update available times when date is selected
//   const updateTimes = (selectedDate) => {
//     dispatch({ type: "UPDATE_TIMES", date: selectedDate });
//   };

//   return (
//     <section className="main">
//       <h1>Book a Table</h1>
//       <BookingForm
//         date={date}
//         setDate={setDate}
//         availableTimes={availableTimes}
//         updateTimes={updateTimes}
//       />
//     </section>
//   );
// }

// export default BookingPage;

//   // Lift state up in the parent component

// import React, { useState } from "react";
// import BookingForm from "../components/BookingForm";

// function BookingPage() {
//   // Lift state up in the parent component
//   const [date, setDate] = useState("");
//   const [time, setTime] = useState("");
//   const [guests, setGuests] = useState(1);
//   const [occasion, setOccasion] = useState("Birthday");

//   // Function to handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Here, you can integrate with an API in the future
//     console.log({ date, time, guests, occasion });
//   };

//   return (
//     <section className="booking-page">
//       <h1>Book a Table</h1>
//       <p>Reservation form will go here.</p>
//       {/* Pass down state and state update functions as props */}
//       <BookingForm
//         date={date}
//         time={time}
//         guests={guests}
//         occasion={occasion}
//         setDate={setDate}
//         setTime={setTime}
//         setGuests={setGuests}
//         setOccasion={setOccasion}
//         onSubmit={handleSubmit}
//       />
//     </section>
//   );
// }

// export default BookingPage;
