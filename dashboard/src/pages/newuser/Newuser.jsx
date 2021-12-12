import "./newuser.css";

function Newuser() {
  return (
    <div className="newuser">
      <h1 className="newusertitle">New User</h1>
      <form action="" className="newuserform">
        <div className="newuseritm">
          <label htmlFor="Username">Username</label>
          <input type="text" placeholder="jhon" />
        </div>
        <div className="newuseritm">
          <label htmlFor="Fullname">Fullname</label>
          <input type="text" placeholder="jhon smith" />
        </div>
        <div className="newuseritm">
          <label htmlFor="Email">Email</label>
          <input type="email" placeholder=" smith1231@gamil.com" />
        </div>
        <div className="newuseritm">
          <label htmlFor="password">password</label>
          <input type="password" />
        </div>
        <div className="newuseritm">
          <label htmlFor="Phone">Phone</label>
          <input type="text" placeholder=" +91 264651215" />
        </div>
        <div className="newuseritm">
          <label htmlFor="Address">Address</label>
          <input type="email" placeholder=" India" />
        </div>
        <div className="newusergender">
          <label htmlFor="gender">Gender</label>
          <input type="radio" name="gender" value="male" />
          <label htmlFor="male">male</label>
          <input type="radio" name="gender" value="female" />
          <label htmlFor="female">female</label>
        </div>
        <div className="newuseritm">
          <label htmlFor="Active">Active</label>
          <select name="active" className="newuserselect" id="active">
            <option value="yes">Yes</option>
            <option value="no">NO</option>
          </select>
        </div>
        <button className="newuserbtn">Create</button>
      </form>
    </div>
  );
}

export default Newuser;
