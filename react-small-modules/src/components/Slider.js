// Logic for Prev button, next button and restart  and slider 
import React, { useState } from "react";

function Slides({ slides }) {
  const [currentIndex,setCurrentIndex] = useState(0);
  const handleNext = () => {
    if(currentIndex < slides.length - 1 ){
      setCurrentIndex(currentIndex + 1);
    }
    if(currentIndex > slides.length){

    }
  }
  const handlePrev = () => {
    if(currentIndex > 0){
      setCurrentIndex(currentIndex - 1);
    }
  }
  const handleRestart = () => {
      setCurrentIndex(0);
  }
  return (
    <div>
      <div id="navigation" className="text-center">
        <button data-testid="button-restart" onClick={handleRestart} disabled={currentIndex === 0}className="small outlined">
          Restart
        </button>
        <button data-testid="button-prev" onClick={handlePrev} disabled={currentIndex === 0} className="small">
          Prev
        </button>
        <button data-testid="button-next" onClick={handleNext} disabled={currentIndex === slides.length-1}className="small">
          Next
        </button>
      </div>

      <div id="slide" className="card text-center">
          <h1 data-testid="title">{slides[currentIndex].title}</h1>
          <p data-testid="text">{slides[currentIndex].text}</p>
      </div>
      

    </div>
  );
}

export default Slides;


export const SLIDES_DATA = [
  {
    title: "Today's workout plan",
    text: "We're gonna do 3 fundamental exercises.",
  },
  {
    title: "First, 10 push-ups",
    text: "Do 10 reps. Remember about full range of motion. Don't rush.",
  },
  {
    title: "Next, 20 squats",
    text: "Squats are important. Remember to keep your back straight.",
  },
  {
    title: "Finally, 15 sit-ups",
    text: "Slightly bend your knees. Remember about full range of motion.",
  },
  {
    title: "Great job!",
    text: "You made it, have a nice day and see you next time!",
  },
];
