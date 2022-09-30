import React from "react";

const Question = () => {
  return (
       <div className="bg-slate-900 p-5">
         <div className="w-10/12 mx-auto my-5 mb-6">
      <div
        tabIndex={0}
        className="collapse collapse-plus border border-base-500 bg-base-500 rounded-box bg-slate-600 mb-3"
      >
        <div className="collapse-title text-xl font-medium">
         <h1 className="text-white"> How does react work ?</h1>
        </div>
        <div className="collapse-content">
          <p className="text-white">
             React uses a declarative paradigm that makes it easier
            to reason about your application and aims to be both efficient and
            flexible. It designs simple views for each state in your
            application, and React will efficiently update and render just the
            right component when your data changes.
          </p>
        </div>
      </div>
      <div
        tabIndex={0}
        className="collapse collapse-plus border border-base-500 bg-base-500 rounded-box bg-slate-600 mb-3"
      >
        <div className="collapse-title text-xl font-medium">
         <h1 className="text-white"> Difference between props and state ?</h1>
        </div>
        <div className="collapse-content">
          <p className="text-white">
          Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components. The this.setState property is used to update the state values in the component
          </p>
        </div>
      </div>
      <div
        tabIndex={0}
        className="collapse collapse-plus border border-base-500 bg-base-500 rounded-box bg-slate-600"
      >
        <div className="collapse-title text-xl font-medium">
         <h1 className="text-white"> what useEffect can do ?</h1>
        </div>
        <div className="collapse-content">
          <p className="text-white">
          The useEffect Hook allows us to replace repetitive component lifecycle code. Essentially, a Hook is a special function that allows you to “hook into” React features. Hooks are a great solution if you've previously written a functional component and realize that you need to add state to it.
          </p>
        </div>
      </div>
    </div>
       </div>
  );
};

export default Question;
