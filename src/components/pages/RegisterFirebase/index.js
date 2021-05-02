import React, {useState} from 'react'
import Button from "../../atom/Button";
import Input from "../../atom/Input";
import firebase from "../../../config/Firebase";
import {useHistory} from 'react-router-dom';

const RegisterFirebase = () => {

    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    let history = useHistory();

    const handleSubmit = () => {

        const data = {
            email:email,
            fullName: fullName,
        };

        firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            const userId = userCredential.user.uid;
            //simpan ke realtime database
            firebase
            .database()
            .ref("users/" + userId)
            .set({data});
            
            setFullName("");
            setEmail("");
            setPassword("");
            //redirect ke dashboard(on path from router)
            history.push("/loginFirebase");
        })
        .catch((error) => {
            console.log(error);
        });
    }; 

    return (
        <div className="container mt-5">
            <h3>Register</h3>
            <Input
                className="form-control form-control-sm"
                label="Nama Lengkap"
                placeholder="Masukkan nama lengkap"
                value={fullName}
                onChange={(event) => setFullName(event.target.value)}
            />
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
            <Button onClick={handleSubmit} text="Tambah User" className="btn btn-success form-control"/>
        </div>
    );
};

export default RegisterFirebase;