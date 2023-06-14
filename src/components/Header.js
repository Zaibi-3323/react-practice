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

  const [name, setName] = useState();
  const [fullName, setFullName] = useState();
  const [lastName, setLastName] = useState();
  const [lastNameNew, setLastNameNew] = useState();

  const userName = (event) => {
    console.log(event.target.value);
    setName(event.target.value);
  };

  const onSubmits = (event) => {
    event.preventDafult();
    setFullName(name);
    setLastNameNew(lastName);
  };


  const userName2 = (event) => {
    setLastName(event.target.value)

  }

  return (
    <div class="login-container">
      <div class="login-box">
        <h2>Login {fullName} {lastNameNew}</h2>
        <form onSubmit={onSubmits}>
          <div class="form-group">
            <input
              type="text"
              id="username"
              name="username"
              placeholder="First Name"
              onChange={userName}
              value={name}
            />
          </div>
          <div class="form-group">
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Last Name"
              onChange={userName2}
              value={lastName}
            />
          </div>
          {/* <div class="form-group">
            <input
              type="password"
              id="password"
              name="password"
              placeholder="PASSWORD"
            />
          </div> */}
          <button type="submit" >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Header;
