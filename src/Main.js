import React, { useReducer, useState } from "react";
import BookingForm from "./components/BookingForm";

// export function initializeTimes() {
//   return ["17:00", "18:00", "19:00", "20:00", "21:00"];
// }

// export function updateTimes(selectedDate, currentTimes) {
//   // For now, returns the same array; real logic can go here later
//   return [...currentTimes];
// }

// Reducer function to handle available times state
function timesReducer(state, action) {
  switch (action.type) {
    case "UPDATE_TIMES":
      // For simplicity, we are not changing available times based on date here
      // In the future, this logic could change the available times based on the date selected
      return [...state]; // return the same times (you can update the logic later)
    default:
      return state;
  }
}

function Main() {
  // State for selected date
  const [date, setDate] = useState("");
  // UseReducer for available times
  const [availableTimes, dispatch] = useReducer(timesReducer, [
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
  ]);

  // Function to update available times when date is selected
  const updateTimes = (selectedDate) => {
    dispatch({ type: "UPDATE_TIMES", date: selectedDate });
  };

  return (
    <section className="main">
      <h1>Book a Table</h1>
      <BookingForm
        date={date}
        setDate={setDate}
        availableTimes={availableTimes}
        updateTimes={updateTimes}
      />
    </section>
  );
}

export default Main;
