import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import App from "./App.tsx";
import StarRating from "./StarRating.tsx";
// import Challenge from "./Challenge.tsx";
// import "./challenge.css";
import App from "./App-v2.tsx";
import Challenge2 from "./Challenge2.tsx";

function Test() {
  const [movieRating, setMovieRating] = useState(0);

  return (
    <div>
      <StarRating
        size={50}
        color="blue"
        defaultRating={3}
        onSetRating={setMovieRating}
      ></StarRating>
      <p>This movie was rated {movieRating} stars</p>
    </div>
  );
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
    {/* <App */}
    {/* <StarRating
      maxRating={5}
      message={["Terrible", "Bad", "Okay", "Good", "Amazing"]} */}
    {/* // ></StarRating> */}
    {/* <StarRating size={24} color="red" defaultRating={3}></StarRating> */}
    {/* <Test></Test> */}
    {/* <Challenge></Challenge> */}
    {/* <Challenge2></Challenge2> */}
  </StrictMode>
);
