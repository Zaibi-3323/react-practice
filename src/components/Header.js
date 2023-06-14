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

  const userName = (event) => {
    console.log(event.target.value);
    setName(event.target.value);
  };

  const onSubmit = () => {
    setFullName(name);
  };

  return (
    <div class="login-container">
      <div class="login-box">
        <h2>Login {fullName}</h2>
        <form>
          <div class="form-group">
            <input
              type="text"
              id="username"
              name="username"
              placeholder="USERNAME"
              onChange={userName}
              value={name}
            />
          </div>
          <div class="form-group">
            <input
              type="password"
              id="password"
              name="password"
              placeholder="PASSWORD"
            />
          </div>
          <button type="submit" onClick={onSubmit}>
            Submit
          </button>
          <div class="register">
            <p> Already Registered?</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Header;
