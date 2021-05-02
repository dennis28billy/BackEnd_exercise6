import React from "react";
import "../../../App.css";
const Card = ({ email, fullName, avatar }) => {
  return (
    <div
      className="card alignCenter mt-3  "
      style={{ width: "20rem", height: "25rem" }}
    >
      <img className="card-img-top profile" src={avatar} alt="avatar" />
      <div className="card-body">
        <p className="card-text">{fullName}</p>
        <p className="card-text">{email}</p>
      </div>
    </div>
  );
};

export default Card;