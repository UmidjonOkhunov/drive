import React from "react";

interface CoursePartBase {
  name: string;
  exerciseCount: number;
}

interface CoursePartOne extends CoursePartBase {
  name: "Fundamentals";
  description: string;
}

interface CoursePartTwo extends CoursePartBase {
  name: "Using props to pass data";
  groupProjectCount: number;
}

interface CoursePartThree extends CoursePartBase {
  name: "Deeper type usage";
  description: string;
  exerciseSubmissionLink: string;
}

interface CoursePartFour extends CoursePartBase {
  name: "Typescript with React";
  exerciseCount: number;
  description: string;
  user: string;
}

type CoursePart =
  | CoursePartOne
  | CoursePartTwo
  | CoursePartThree
  | CoursePartFour;

const Header: React.FC<{ title: string }> = ({ title }) => <h1>{title}</h1>;

const Content: React.FC<{ courseParts: CoursePart[] }> = ({ courseParts }) => {
  return (
    <ul>
      {courseParts.map((part, i) => (
        <Part key={i} coursePart={part} />
      ))}
    </ul>
  );
};

const Total: React.FC<{ courseParts: CoursePart[] }> = ({ courseParts }) => {
  return (
    <p>
      Number of exercises{" "}
      {courseParts.reduce((carry, part) => carry + part.exerciseCount, 0)}
    </p>
  );
};

const assertNever = (value: never): never => {
  throw new Error(
    `Unhandled discriminated union member: ${JSON.stringify(value)}`
  );
};

const Part: React.FC<{ coursePart: CoursePart }> = ({ coursePart }) => {
  switch (coursePart.name) {
    case "Fundamentals":
      // console.log(part.description);
      return (
        <li>
          {coursePart.name} {coursePart.exerciseCount} {coursePart.description}
        </li>
      );
    // break;
    case "Using props to pass data":
      // console.log(part.description);
      return (
        <li>
          {coursePart.name} {coursePart.exerciseCount}{" "}
          {coursePart.groupProjectCount}
        </li>
      );
    // break;
    case "Deeper type usage":
      // console.log(part.description);
      return (
        <li>
          {coursePart.name} {coursePart.exerciseCount} {coursePart.description}{" "}
          {coursePart.exerciseSubmissionLink}
        </li>
      );
    case "Typescript with React":
      // console.log(part.description);
      return (
        <li>
          {coursePart.name} {coursePart.exerciseCount} {coursePart.description}{" "}
          {coursePart.user}
        </li>
      );
    // break;
    default:
      return assertNever(coursePart);
  }
  // return (
  //   <li>
  //     {coursePart.name} {coursePart.exerciseCount}
  //   </li>
  // );
};

const App: React.FC = () => {
  const courseName = "Half Stack application development";
  const courseParts: CoursePart[] = [
    {
      name: "Fundamentals",
      exerciseCount: 10,
      description: "This is an awesome course part",
    },
    {
      name: "Using props to pass data",
      exerciseCount: 7,
      groupProjectCount: 3,
    },
    {
      name: "Deeper type usage",
      exerciseCount: 14,
      description: "Confusing description",
      exerciseSubmissionLink: "https://fake-exercise-submit.made-up-url.dev",
    },
    {
      name: "Typescript with React",
      exerciseCount: 11,
      description: "Hard to understand and rather boring",
      user: "Allergic rhinitis sufferer",
    },
  ];

  return (
    <div>
      <Header title={courseName} />
      <Content courseParts={courseParts} />
      <Total courseParts={courseParts} />
    </div>
  );
};
