import React, { useState } from "react";
import Button from "../../atom/Button";
import Input from "../../atom/Input";
import firebase from "../../../config/Firebase";
import {useHistory} from 'react-router-dom';


const LoginFirebase = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let history = useHistory();

  const handleSubmit = () => {
    firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((res) => {
        history.push("/dashboardFirebase");
      })
    .catch((error) => {
        console.log("Error", error);
     });
    
  };

  return (
    <div className="container-md mt-4">
      <h3>Login</h3>
      <Input
        className="form-control form-control-sm"
        label="Email"
        placeholder="Masukkan email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <Input
        className="form-control form-control-sm"
        label="Password"
        placeholder="Masukkan password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <br />
      <Button onClick={handleSubmit} text="Submit" className="btn btn-success form-control"/>
    </div>
  );
};

export default LoginFirebase;