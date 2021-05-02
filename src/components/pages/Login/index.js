import React, { useState } from "react";
import Button from "../../atom/Button";
import Input from "../../atom/Input";


const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    const dataSubmit = {
      username: username,
      password: password,
    };
    console.log(dataSubmit);
  };

  return (
    <div className="container-md mt-4">
      <h3>Login</h3>
      <Input
        className="form-control form-control-sm"
        label="Username"
        placeholder="Input username"
        value={username}
        onChange={(event) => setUsername(event.target.value)}
      />
      <Input
        className="form-control form-control-sm"
        label="Password"
        placeholder="Input password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <br />
      <Button onClick={handleSubmit} text="Submit" className="btn btn-success form-control"/>
    </div>
  );
};

export default Login;