import { useState } from "react";

const Challenge_2 = () => {
  const [count, setCount] = useState(null);
  const [step, setStep] = useState(1);

  return (
    <div className="challenge_1">
      <Counter
        step={step}
        setStep={setStep}
        count={count}
        setCount={setCount}
      ></Counter>
    </div>
  );
};

const Counter = ({ step, setStep, count, setCount }) => {
  const handlestep = (e) => {
    setStep(Number(e.target.value));
  };

  const handleInput = (e) => {
    e.preventDefault();
    const inputValue = e.target.value;

    if (inputValue === "" || inputValue === "-" || !isNaN(Number(inputValue))) {
      setCount(Number(e.target.value));
    }
  };

  const handleCountup = () => {
    setCount(count + step);
  };
  const handleCountdown = () => {
    setCount(count - step);
  };

  const handleReset = () => {
    setCount(0);
    setStep(1);
  };

  const date = new Date();
  date.setDate(date.getDate() + count);

  return (
    <>
      <input type="range" min="0" max="10" value={step} onChange={handlestep} />
      <span>{step}</span>
      <br />
      <button onClick={handleCountdown}>-</button>
      <input type="text" value={count} onChange={handleInput} />
      <button onClick={handleCountup}>+</button>
      <br />
      <p>
        <span>
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} days from today is `
            : `${Math.abs(count)} days ago was `}
        </span>
        <span>{date.toDateString()}</span>
        <br />
        {count !== 0 || step !== 1 ? (
          <button onClick={handleReset}>Reset</button>
        ) : null}
      </p>
    </>
  );
};

export default Challenge_2;
