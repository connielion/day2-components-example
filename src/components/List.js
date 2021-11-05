import React from "react";
import Button from "./Button";
// List is a class component with "state"
class List extends React.Component {
  constructor() {
    // 'this' keyword is not allowed before super(); check here for more info - https://stackoverflow.com/questions/40433463/what-does-calling-super-in-a-react-constructor-do
    super();
    // initialize "state" here
    this.state = {
      someData: [1, 2, 3, "a", "b"],
    };
  }

  render() {
    // console.log('React.Component:', React.Component)
    console.log("'this' is referring to: ", this)
    const { someData } = this.state; // destructure numbersList from the "state" object initialized above, so I don't have to type "this.state.someData.map(...)" on line 18

    // for each number(element) in the array, return a <li> with the number(element) inside.
    const listElements = someData.map((element) => {
      return <li>{element}</li>;
    });

    // console.log(`nums`,nums)

    const buttons = someData.map((element)=>{
        return <Button element={element} />
    })
    return (
      <> 
        {/* <>...</> is short syntax for <React.Fragment>, which is used as a wrapper without having to add extra nodes to the DOM */}
        <h2>List Component</h2>
        {/* destructure nums array - an array of 'li's */}
        <ul>{listElements}</ul>

        <h3>Buttons list rendered by List Component</h3>
        <ul>{buttons}</ul>
      </>
    );
  }
}

export default List;
