import React from "react";

class List extends React.Component {
  constructor() {
    // 'this' keyword is not allowed before super()
    super();
    // initialize state here
    this.state = {
      someData: [1, 2, 3, "a", "b"],
    };
  }

  render() {
    // console.log('React.Component:', React.Component)
    console.log("'this' is referring to: ", this)
    const { someData } = this.state; // destructure numbersList from the "state" object initialized above, so I don't have to type "this.state.someData.map(...)" on line 18

    // for each number(element) in the array, return a <li> with the number(element) inside.
    const nums = someData.map((element) => {
      return <li>{element}</li>;
    });

    console.log(`nums`,nums)

    return (
      <> 
        {/* <>...</> is short syntax for <React.Fragment>, which is used as a wrapper without having to add extra nodes to the DOM */}
        <h2>List Component</h2>
        {/* destructure nums array - an array of 'li's */}
        <ul>{nums}</ul>
      </>
    );
  }
}

export default List;
