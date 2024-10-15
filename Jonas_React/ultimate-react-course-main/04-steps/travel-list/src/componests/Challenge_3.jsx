import { useState } from "react";

const Challenge_3 = () => {
  const [bill, setBill] = useState("");
  const [service, setService] = useState("");
  const [friendService, setFriendService] = useState("");

  const tip = (service + friendService) / 2;
  const total = bill + tip;

  console.log(bill);
  console.log(tip);
  console.log(total);

  const handleBill = (e) => {
    setBill(Number(e.target.value));
  };

  const handleService = (e) => {
    setService(Number(e.target.value));
  };
  const handleFriendService = (e) => {
    setFriendService(Number(e.target.value));
  };

  const reset = () => {
    setBill("");
    setService("");
    setFriendService("");
  };
  return (
    <>
      <Bill bill={bill} setBill={setBill} handleBill={handleBill}></Bill>
      <Service handleService={handleService} service={service}></Service>
      <FriendService
        handleFriendService={handleFriendService}
        friemdService={friendService}
      ></FriendService>
      {bill !== null && <OutPut tip={tip} total={total} bill={bill}></OutPut>}
      {bill !== null && <Resetbtn reset={reset}></Resetbtn>}
    </>
  );
};

const Bill = ({ bill, handleBill }) => {
  return (
    <>
      <div>
        How much was the bill?
        <input value={bill} type="text" onChange={handleBill}></input>
      </div>
    </>
  );
};

const Service = ({ handleService, service }) => {
  return (
    <>
      <div>
        How did you like the service?
        <select value={service} onChange={handleService}>
          <option value="0">Dissatisfied(0%)</option>
          <option value="5">It was okay(5%)</option>
          <option value="10">It was good(10%)</option>
          <option value="20">Absolutely amazing!(20%)</option>
        </select>
      </div>
    </>
  );
};

const FriendService = ({ handleFriendService, friendService }) => {
  return (
    <>
      <div>
        How did your friends like the service?
        <select value={friendService} onChange={handleFriendService}>
          <option value="0">Dissatisfied(0%)</option>
          <option value="5">It was okay(5%)</option>
          <option value="10">It was good(10%)</option>
          <option value="20">Absolutely amazing!(20%)</option>
        </select>
      </div>
    </>
  );
};

const Resetbtn = ({ reset }) => {
  return <button onClick={reset}>Reset</button>;
};

const OutPut = ({ total, tip, bill }) => {
  return `You pay
         ${`$${total}($${bill}+$${tip})tips `}`;
};

export default Challenge_3;
