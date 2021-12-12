import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import "./user.css";

function User() {
  return (
    <div className="user">
      <div className="usertitlecontainer">
        <h1 className="usertitle">Edit User</h1>
        <Link to="/newuser">
          <button className="useraddbutton">Create </button>
        </Link>
      </div>
      <div className="usercontainer">
        <div className="usershow">
          <div className="usershowtop">
            <img
              src="https://cdn.pixabay.com/photo/2018/01/29/17/01/woman-3116587_960_720.jpg"
              alt=""
              className="usershowimg"
            />
            <div className="usershowtoptitile">
              <span className="usershowusername">jonas-svidras</span>
              <span className="usershowusertitle">Computer Engineer</span>
            </div>
          </div>
          <div className="usershowbottom">
            <span className="usershowtitle">Account Details</span>
            <div className="usershowinfo">
              <PermIdentity className="usershowicon"></PermIdentity>
              <span className="usershowinfotitle">Achyuta89</span>
            </div>
            <div className="usershowinfo">
              <CalendarToday className="usershowicon"></CalendarToday>
              <span className="usershowinfotitle">10.02.2001</span>
            </div>
            <div className="usershowinfo">
              <PhoneAndroid className="usershowicon" />
              <span className="usershowinfotitle">+91 235698547</span>
            </div>
            <div className="usershowinfo">
              <MailOutline className="usershowicon" />
              <span className="usershowinfotitle">Achyuta@gamil.com</span>
            </div>
            <div className="usershowinfo">
              <LocationSearching className="usershowicon" />

              <span className="usershowinfotitle">Gujarat,India</span>
            </div>
          </div>
        </div>
        <div className="userupdate">
          <span className="userupdatetitle">Edit</span>
          <form action="" className="userupdateform">
            <div className="userupdateleft">
              <div className="userupdateitem">
                <label>Username</label>
                <input
                  type="text"
                  placeholder="jonas-svidras"
                  className="userupdateinpt"
                />
              </div>
              <div className="userupdateitem">
                <label>Fullname</label>
                <input
                  type="text"
                  placeholder="jonas-svidras"
                  className="userupdateinpt"
                />
              </div>
              <div className="userupdateitem">
                <label>Email</label>
                <input
                  type="text"
                  placeholder="jonas-svidras@gamil.com"
                  className="userupdateinpt"
                />
              </div>
              <div className="userupdateitem">
                <label>Phone</label>
                <input
                  type="text"
                  placeholder="+91 2357847484"
                  className="userupdateinpt"
                />
              </div>
              <div className="userupdateitem">
                <label>Address</label>
                <input
                  type="text"
                  placeholder="India"
                  className="userupdateinpt"
                />
              </div>
            </div>
            <div className="userupdateright">
              <div className="userupdateupload">
                <img
                  src="https://cdn.pixabay.com/photo/2018/01/29/17/01/woman-3116587_960_720.jpg"
                  alt=""
                  className="userupdateimg"
                />
                <label htmlFor="file">
                  <Publish />
                </label>
                <input
                  type="file"
                  name="file"
                  id="file"
                  style={{ display: "none" }}
                />
              </div>
              <button className="userupdatebutton"> Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default User;
