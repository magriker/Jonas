import { useState } from "react";

const Challenge_1 = () => {
  const [step, setStep] = useState(0);
  const [count, setCount] = useState(1);

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
  const handleStepup = () => {
    setStep(step + count);
  };
  const handleStepdown = () => {
    setStep(step - count);
  };
  const handleCountup = () => {
    setCount(count + 1);
  };
  const handleCountdown = () => {
    if (count > 1) setCount(count - 1);
  };

  const date = new Date();
  date.setDate(date.getDate() + step);

  return (
    <>
      <button onClick={handleStepdown}>-</button>
      Step:{step}
      <button onClick={handleStepup}>+</button>
      <br />
      <button onClick={handleCountdown}>-</button>
      count:{count}
      <button onClick={handleCountup}>+</button>
      <p>
        <span>
          {step === 0
            ? "Today is "
            : step > 0
            ? `${step} days from today is `
            : `${Math.abs(step)} days ago was `}
        </span>
        <span>{date.toDateString()}</span>
      </p>
    </>
  );
};

export default Challenge_1;
