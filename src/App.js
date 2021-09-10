import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchSmurfs } from "./actions";

import AddForm from "./components/AddForm";
import SmurfList from "./components/SmurfList";
import Header from "./components/Header";

import axios from "axios";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends Component {
  componentDidMount() {
    // axios
    //   .get("http://localhost:3333/smurfs")
    //   .then((res) => console.log(res))
    //   .catch((err) => console.log("Axios Error", err));
    this.props.fetchSmurfs();
  }

  render() {
    return (
      <div className="App">
        <Header />

        <main>
          <SmurfList />
          <AddForm />
        </main>
      </div>
    );
  }
}

export default connect(null, { fetchSmurfs })(App);

//Task List:
//1. Connect the fetchSmurfs actions to the App component.
//2. Call the fetchSmurfs action when the component first loads.
