import React, { useState } from "react";
import Input from "../../atom/Input";
import Button from "../../atom/Button";
import { Link } from "react-router-dom";
import Axios from "axios";
import NavBar from "../../molecules/Navbar";

const TambahUser = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    const addUser = {
      avatar: "https://source.unsplash.com/random",
      first_name: firstName,
      last_name: lastName,
      email: email,
    };
    Axios.post("http://localhost:3005/users", addUser);
  };

  return (
    <div className="container">
      <NavBar />
      <h3 className="mt-4">Add New User</h3>
      <Input
        className="form-control"
        label="First Name"
        placeholder="Input Your First Name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <Input
        className="form-control"
        label="Last Name"
        placeholder="Input Your Last Name"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      <Input
        className="form-control"
        label="Email"
        placeholder="Input Your Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <Link to="/">
        <Button onClick={handleSubmit} text="Save User" className="btn btn-success form-control"/>
      </Link>
    </div>
  );
};

export default TambahUser;