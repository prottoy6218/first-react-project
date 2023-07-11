import React from "react";
import "./App.css";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Header from "./components/Header";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <br />
        <br />
        <Content />
        <br />
        <br />
        <Footer />
      </div>
    );
  }
}

export default App;
