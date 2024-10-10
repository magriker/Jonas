import { useState } from "react";

const Challenge_3 = () => {
  const [bill, setBill] = useState(0);
  const [service, setService] = useState("");
  const [friendService, setFriendService] = useState("");

  const handleBill = (e) => {
    setBill(e.target.value);
  };

  const handleService = (e) => {
    setService(Number(e.target.value));
  };
  const handleFriendService = (e) => {
    setFriendService(Number(e.target.value));
  };

  return (
    <>
      <Bill bill={bill} setBill={setBill} handleBill={handleBill}></Bill>
      <Service handleService={handleService} service={service}></Service>
      <FriendService
        handleFriendService={handleFriendService}
        friemdService={friendService}
      ></FriendService>
      You pay {}
      {`$${bill}+ `}
    </>
  );
};

const Bill = ({ bill, handleBill }) => {
  return (
    <>
      <div>
        How much was the bill?
        <input value={bill} type="number" onChange={handleBill}></input>
      </div>
    </>
  );
};

const Service = ({ handleService, service }) => {
  return (
    <>
      <div>
        How did you like the service?
        <select name="servicelevel" value={service} onChange={handleService}>
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
        <select
          name="servicelevel"
          value={friendService}
          onChange={handleFriendService}
        >
          <option value="0">Dissatisfied(0%)</option>
          <option value="5">It was okay(5%)</option>
          <option value="10">It was good(10%)</option>
          <option value="20">Absolutely amazing!(20%)</option>
        </select>
      </div>
    </>
  );
};

export default Challenge_3;
