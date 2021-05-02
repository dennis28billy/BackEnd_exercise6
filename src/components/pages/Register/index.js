import React, { useState } from "react";
import Button from "../../atom/Button";
import Input from "../../atom/Input";

const Register = () => {
  const [fullname, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const handleSubmit = () => {
    const dataRegister = {
      fullName: fullname,
      username: username,
      email: email,
      phone: phone,
      address: address,
    };
    console.log(dataRegister);
  };

  return (
    <div className="container-md mt-4">
      <h3>Register</h3>

      <Input
        className="form-control"
        placeholder="Enter your full name"
        label="Full Name"
        value={fullname}
        onChange={(event) => setFullName(event.target.value)}
      />
      <Input
        className="form-control"
        placeholder="Enter your username"
        label="Username"
        value={username}
        onChange={(event) => setUsername(event.target.value)}
      />
      <Input
        className="form-control"
        placeholder="Enter your email"
        label="Email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <Input
        className="form-control"
        placeholder="Enter your phone number"
        label="Phone Number"
        value={phone}
        onChange={(event) => setPhone(event.target.value)}
      />
      <Input
        className="form-control"
        placeholder="Enter your address"
        label="Address"
        value={address}
        onChange={(event) => setAddress(event.target.value)}
      />
      <br />
      <Button onClick={handleSubmit} text="Register" className="btn btn-success form-control"/>
    </div>
  );
};

export default Register;