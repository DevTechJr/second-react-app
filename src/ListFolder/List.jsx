import React from "react";
import { render } from "react-dom";
import { useState } from "react";
import "./List.css";

const List = () => {
  const [showEvents, setShowEvents] = useState(true);
  console.log(showEvents);
  const [events, setEvents] = useState([
    {
      event: "안녕하세요",
      id: 1,
    },
    {
      event: "Mr Lee",
      id: 2,
    },
    {
      event: "idk what to say",
      id: 3,
    },
  ]);

  const handleClick = (eventID) => {
    setEvents((prevEvents) => {
      return prevEvents.filter((event) => event.id !== eventID);
    });
    console.log(eventID);
  };

  // Now display it to the console

  return (
    <div className="list">
      <div className="buttons">
        {/* If the showevents is true as per the condition below, then the rhs of the *&& is run */}
        {showEvents && (
          <button onClick={() => setShowEvents(false)}>Hide</button>
        )}
        {/* If showevents is false like the condition asks, then the rhs is also run. */}
        {!showEvents && (
          <button onClick={() => setShowEvents(true)}>Show</button>
        )}
      </div>
      {showEvents &&
        events.map((eventIndex) => (
          <div key={eventIndex.id}>
            <h1>{eventIndex.event}</h1>
            <button onClick={() => handleClick(eventIndex.id)}>
              Delete Event
            </button>
          </div>
        ))}
    </div>
  );
};

export default List;
