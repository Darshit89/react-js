import React, { Component } from "react";

class AddContact extends Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     name: " ",
  //     email: " ",
  //   };
  // }
  state = {
    name: " ",
    email: " ",
  };
  add = (e) => {
    e.preventDefault();
    if (this.state.name === " " && this.state.email === " ") {
      alert("please fill the details");
    } else {
      this.props.ContactHandler(this.state);
      // console.log(this.state);
      this.setState({ name: "", email: "" });
      // console.log(this.props);
      this.props.history.push("/");
    }
  };

  render() {
    return (
      <div className="ui main">
        <h2>Add Contact</h2>

        <form onSubmit={this.add} className="ui form">
          <div className="field">
            {/* <p>{this.state.name}</p> */}
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="Name"
              placeholder="Name"
              value={this.state.name}
              onChange={(e) => this.setState({ name: e.target.value })}
            />
          </div>
          <div className="field">
            <label htmlFor="name">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={this.state.email}
              onChange={(e) => this.setState({ email: e.target.value })}
            />
          </div>
          <button type="submit" className="ui button blue">
            Add
          </button>
        </form>
      </div>
    );
  }
}

export default AddContact;
