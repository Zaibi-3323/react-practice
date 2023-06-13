import React, { useState } from "react";

const Header = () => {
  // const bioData = [
  //   {
  //     id: 0,
  //     myName: "zohaib",
  //     age: 21,
  //   },
  //   {
  //     id: 1,
  //     myName: "javed",
  //     age: 23,
  //   },
  //   {
  //     id: 2,
  //     myName: "zohan",
  //     age: 2,
  //   },
  // ];

  //  const [myArray, setMyArray] = useState(bioData)

  //  const clearArray = (id) => {
  //   setMyArray([]);
  //  }

  //  const removeEle = (id) => {
  //   const myNewArray = myArray.filter((i) => {
  //     return i.id != id;
  //   })
  //   setMyArray (myNewArray)
  //  }

  const [count, setCount] = useState(0);

  const number = () => {
    setCount(count + 1);
    console.log("clicked");
  };

  return (
    <header className="py-8">
      <div className="container mx-auto">
        <>
          return(
          <h1 className="h1Style">{count}</h1>)
          <button className="btn" onClick={number}>
            Click Me
          </button>
        </>
      </div>
    </header>
  );
};

export default Header;
