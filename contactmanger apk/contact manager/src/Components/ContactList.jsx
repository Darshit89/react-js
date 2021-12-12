import React, { useRef } from "react";
import { Link } from "react-router-dom";
import ContactCard from "./ContactCard";

export default function ContactList(props) {
  // console.log(props.contact);
  const serachinput = useRef("");

  // onchagefunction but i write directly
  // const getSearchTerm = () => {
  //   props.searchandler(serachinput.current.value);
  // };

  const rendercontactlist = props.contact.map((contact) => {
    return <ContactCard contact={contact} key={contact.id}></ContactCard>;
  });

  return (
    <div className="main" style={{ margin: "50px" }}>
      <h1>Contact List</h1>
      <div className="ui search">
        <div className="ui icon input">
          <input
            type="text"
            name="search"
            placeholder="Search Contact"
            className="prompt"
            value={props.term}
            ref={serachinput}
            onChange={() => props.searchandler(serachinput.current.value)}
          />
          <i className="search icon"></i>
        </div>
      </div>
      <div className=" ui celled list">{rendercontactlist}</div>
      <Link to="/add">
        <button className="ui button blue right aligned">Add Contact</button>
      </Link>
    </div>
  );
}
