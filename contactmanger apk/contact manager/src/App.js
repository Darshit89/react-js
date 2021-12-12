import { createContext, useEffect, useState } from "react";
import "./App.css";
import AddContact from "./Components/AddContact";
import { uuid } from "uuidv4";
import ContactList from "./Components/ContactList";
import Header from "./Components/Header";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ContactDetails from "./Components/ContactDetails";
import axios from "axios";
import EditContact from "./Components/EditContact";

export const GetContntactId = createContext();

function App() {
  const [contacts, setcontacts] = useState([]);
  const [searchterm, setSearchterm] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  //fetch contact

  const retriveContacts = async () => {
    try {
      const response = await axios.get("http://localhost:3004/contacts");
      setcontacts(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const addContactHandler = async (contactdetails) => {
    console.log(contactdetails);
    const Contactdata = {
      id: uuid(),
      ...contactdetails,
    };
    const response = await axios.post(
      "http://localhost:3004/contacts",
      Contactdata
    );
    setcontacts([...contacts, response.data]);
  };
  const updateContactHandler = async (contactdetail) => {
    const response = axios.put(
      `http://localhost:3004/contacts/${contactdetail.id}`,
      contactdetail
    );
    const { id, name, email } = response.data;
    setcontacts(
      contacts.map((item) => {
        return item.id === id ? { ...response.data } : item;
      })
    );
  };

  const removeContact = async (id) => {
    // console.log(id);
    await axios.delete(`http://localhost:3004/contacts/${id}`);
    console.log("suceess");
    const newContact = contacts.filter((item) => {
      return item.id !== id;
    });
    setcontacts(newContact);
  };
  const searchHandler = (searchinputvalue) => {
    // console.log(searchinputvalue);
    setSearchterm(searchinputvalue);
    if (searchterm !== " ") {
      const newcontactlist = contacts.filter((item) => {
        // console.log(Object.values(item).join(" ")); here we object.value give array of object values and then we join convert arrray to sting and then we check using includes
        return Object.values(item)
          .join(" ")
          .toLowerCase()
          .includes(searchterm.toLowerCase());
      });
      setSearchResult(newcontactlist);
    } else {
      setSearchResult(contacts);
    }
  };

  // const LOCALSTORAGE_KEY = "contacts";
  useEffect(() => {
    // const retrevieContact = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
    // console.log(retrevieContact);
    // if (retrevieContact) setcontacts(retrevieContact);

    retriveContacts();
  }, []);
  // useEffect(() => {
  //   localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(contacts));
  // }, [contacts]);

  // console.log(getContntactId);
  return (
    <div className="ui container">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/">
            <GetContntactId.Provider value={removeContact}>
              <ContactList
                contact={searchterm.length < 1 ? contacts : searchResult}
                term={searchterm}
                searchandler={searchHandler}
              />
            </GetContntactId.Provider>
          </Route>
          <Route
            path="/add"
            render={(props) => (
              <AddContact {...props} ContactHandler={addContactHandler} />
            )}
          />
          <Route path="/contact/:id" component={ContactDetails} />
          <Route
            path="/edit"
            render={(props) => (
              <EditContact
                {...props}
                updateContactHandler={updateContactHandler}
              />
            )}
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
