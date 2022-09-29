import React from "react";

const Question = () => {
  return (
    <div className="w-10/12 mx-auto my-5 mb-6">
      <div
        tabIndex={0}
        className="collapse collapse-plus border border-base-300 bg-base-500 rounded-box bg-red-500"
      >
        <div className="collapse-title text-xl font-medium">
          How does react work ?
        </div>
        <div className="collapse-content">
          <p className="text-white">
            tabIndex={0} React uses a declarative paradigm that makes it easier
            to reason about your application and aims to be both efficient and
            flexible. It designs simple views for each state in your
            application, and React will efficiently update and render just the
            right component when your data changes.
          </p>
        </div>
      </div>
      <div
        tabIndex={0}
        className="collapse collapse-plus border border-base-300 bg-base-500 rounded-box bg-red-500"
      >
        <div className="collapse-title text-xl font-medium">
          Difference between props and state ?
        </div>
        <div className="collapse-content">
          <p className="text-white">
            tabIndex={0} Props are used to pass data from one component to
            another. The state is a local data storage that is local to the
            component only and cannot be passed to other components. The
            this.setState property is used to update the state values in the
            component.
          </p>
        </div>
      </div>
      <div
        tabIndex={0}
        className="collapse collapse-plus border border-base-300 bg-base-500 rounded-box bg-red-500"
      >
        <div className="collapse-title text-xl font-medium">
          what useEffect can do ?
        </div>
        <div className="collapse-content">
          <p className="text-white">
            tabIndex={0}One of the problems we outlined in the Motivation for
            Hooks is that class lifecycle methods often contain unrelated logic,
            but related logic gets broken up into several methods. Here is a
            component that combines the counter and the friend status indicator
            logic from the previous examples:
          </p>
        </div>
      </div>
    </div>
  );
};

export default Question;
