import React from "react";

const Questions = () => {
  return (
    <div>
      <h1 style={{textAlign:"center"}}>Common Interview Questions:</h1>
      <h3>Q: What is the difference between Props and State in React?</h3>
      <p>
        A: Props are read-only data that are passed down from a parent component
        to a child component. State is mutable data that is managed by a
        component itself.
      </p>
      <h3>Q: How does useState work?</h3>
      <p>
        A: useState is a built-in React hook that allows functional components
        to have state. It returns an array with two values, the current state
        and a function to update that state. The initial state value is passed
        as an argument to useState.
      </p>

      <h3>
        Q: What is the purpose of useEffect in React besides fetching data?
      </h3>
      <p>
        A: useEffect is a hook that is used to handle side effects in a React
        component. Side effects can include anything from updating the DOM,
        fetching data, or setting up event listeners. useEffect runs after every
        render of a component and allows us to perform actions that are not
        directly related to rendering.
      </p>

      <h3>Q: How Does React work?</h3>
      <p>
        A: React is a library that uses a virtual DOM to render and update
        components efficiently. When a component's state or props change, React
        will compare the previous and current state/props and then update only
        the parts of the DOM that have changed. This helps to reduce the amount
        of DOM manipulation needed and improve performance. Additionally, React
        encourages the use of reusable components and follows a unidirectional
        data flow pattern, where data flows from parent components to child
        components.
      </p>
    </div>
  );
};

export default Questions;
