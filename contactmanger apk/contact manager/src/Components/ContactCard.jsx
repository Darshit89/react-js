import user from "../Images/user.png";
import { GetContntactId } from "../App";
import { useContext } from "react";
import { Link } from "react-router-dom";

export default function ContactCard(props) {
  const { id, name, email } = props.contact;
  const removeContact = useContext(GetContntactId);
  // console.log(removeContact);

  return (
    <>
      <div className="item">
        <img src={user} alt="user" className="ui avatar image" />
        <div className="content">
          <Link
            to={{
              pathname: `/contact/${id}`,
              state: { contact: props.contact },
            }}
          >
            <div className="header">{name}</div>
            <div>{email}</div>
          </Link>
        </div>
        <i
          className="trash alternate outline icon right floated"
          onClick={() => removeContact(id)}
          style={{ color: "red", margin: "10px", fontSize: "15px" }}
        ></i>
        <Link
          to={{
            pathname: `/edit`,
            state: { contact: props.contact },
          }}
        >
          <i
            className="edit alternate outline icon right floated"
            style={{ color: "blue", margin: "10px", fontSize: "15px" }}
          ></i>
        </Link>
      </div>
    </>
  );
}
