import React from "react";
import { Link } from "react-router-dom";
import user2 from "../Images/user2.png";

function ContactDetails(props) {
  // console.log(props);
  // console.log(props.location.state.contact);
  const { id, name, email } = props.location.state.contact;
  return (
    <div className="main" style={{ marginTop: "50px" }}>
      <div className="ui card centered">
        <div className="image">
          <img src={user2} alt="user" />
        </div>
        <div className="content">
          <div className="header">{name}</div>
          <div className="description">{email}</div>
        </div>
      </div>
      <div className="center-div">
        <Link to="/">
          <button className="ui button blue center">
            Back to Contact List
          </button>
        </Link>
      </div>
    </div>
  );
}

export default ContactDetails;
