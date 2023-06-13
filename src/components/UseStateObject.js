import React, { useState } from "react";

const UseStateObject = () => {

    const [object, setObject]= React.useState({
        id: 1,
        myName: "Zohaib",
        age: 23,
    })

    const changeObject = () => {
        setObject ({...object , myName : "javed"})
    }

  return (
    <header className="py-8">
      <div className="container mx-auto">
        <>
          <h1 className="h1Style">Name: {object.myName} age: {object.age}</h1>
          <button className="btn" onClick={changeObject}>Update</button>
        </>
      </div>
    </header>
  );
};

export default UseStateObject;
