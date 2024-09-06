import React from "react";
import ReactDOM from "react-dom/client";
import "./styleForChallenge.css";

const name = "Ken";
const intro =
  "Full-stack web developer and teacher at Udemy. When not coding or preparing a course, I like to play board games, tocook (and eat), or to just enjoy the Portuguese sun at the beach.";

const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA",
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D",
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#C3DCAF",
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33",
  },
  {
    skill: "React",
    level: "advanced",
    color: "#60DAFB",
  },
  {
    skill: "Svelte",
    level: "beginner",
    color: "#FF3B00",
  },
];

const CreateCards = () => {
  return (
    <>
      <div className="card">
        <Avatar />
        <div className="data">
          <Intro name={name} intro={intro} />
          <SkillList skills={skills} />
        </div>
      </div>
    </>
  );
};

const Avatar = () => {
  return <img src="./Orange.png" className="avatar"></img>;
};

const Intro = ({ name, intro }) => {
  return (
    <>
      <h1>{name}</h1>
      <p>{intro}</p>
    </>
  );
};

const SkillList = ({ skills }) => {
  return (
    <div className="skill-list">
      {skills.map((s) => (
        <Skill skill={s.skill} level={s.level} color={s.color}></Skill>
      ))}
    </div>
  );
};

const Skill = ({ skill, level, color }) => {
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <span>
        {skill}
        {level === "beginner" ? "👶" : ""}
        {level === "intermediate" ? "😐" : ""}
        {level === "advanced" ? "🦾" : ""}
      </span>
    </div>
  );
};

export default CreateCards;
