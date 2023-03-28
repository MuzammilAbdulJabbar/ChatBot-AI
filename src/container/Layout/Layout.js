import React, { Component } from "react";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import Chatbox from "../../components/Chatbox/Chatbox";
import Footer from "../../components/Footer/Footer";
import Aux from "../Auxiliary/Auxiliary";

class Layout extends Component {
  state = {
    showSideDrawer: false,
  };

  sideDrawerClosedHandler = () => {
    this.setState({ showSideDrawer: false });
  };

  sideDrawerToggleHandler = () => {
    this.setState((prevState) => {
      return { showSideDrawer: !prevState.showSideDrawer };
    });
  };

  render() {
    return (
      <Aux>
        <Header drawerToggleClicked={this.sideDrawerToggleHandler} />
        <Sidebar
          open={this.state.showSideDrawer}
          closed={this.sideDrawerClosedHandler}
        />
        <Chatbox />
        <Footer/>
      </Aux>
    );
  }
}

export default Layout;
