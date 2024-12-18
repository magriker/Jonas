import { useState } from "react";
import "../styles.css";

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    title: "How long do I have to return my chair?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
];

export default function Exercise_1() {
  return (
    <div>
      <Accordion data={faqs}></Accordion>
    </div>
  );
}

const Accordion = ({ data }) => {
  const [curOpen, setCurOpen] = useState(null);

  return (
    <div className="accordion">
      {data.map((item, index) => (
        <AccordionItem
          curOpen={curOpen}
          setCurOpen={setCurOpen}
          num={index}
          title={item.title}
          text={item.text}
          key={item.title}
        ></AccordionItem>
      ))}
    </div>
  );
};

const AccordionItem = ({ num, title, text, curOpen, setCurOpen }) => {
  const handleToggle = () => {
    setCurOpen(num);
  };

  return (
    <div
      className={`item ${curOpen === num ? "open" : ""}`}
      onClick={handleToggle}
    >
      <p className="number">{num < 9 ? `0${num + 1}` : num + 1}</p>
      <p className="title">{title}</p>
      <p className="icon">{curOpen === num ? "-" : "+"}</p>
      {curOpen === num && <div className="content-box">{text}</div>}
    </div>
  );
};
