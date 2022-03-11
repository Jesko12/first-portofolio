import React, { Component } from "react";
import Sidebar from "./Sidebar";
import NavBar from "./Navbar";
import styled from "styled-components";
import { GridWrapperCols2 } from "../common/CommonElements";

const AppWrapper = styled.div`
  background: #f8fafc;
  width: 100%;
  overflow: auto;
`;

class MainSkeleton extends Component {
  state = {
    clicked: false,
  };

  handleClick = () => {
    const clicked = !this.state.clicked;
    this.setState({ clicked });
  };

  render() {
    const { user, children } = this.props;
    return (
      <AppWrapper>
        {user && <NavBar user={user} onClick={this.handleClick} />}
        {user && (
          <GridWrapperCols2>
            <div>
              {user && <Sidebar user={user} clicked={this.state.clicked} />}
            </div>
            <div>{children}</div>
          </GridWrapperCols2>
        )}
        {!user && <div>{children}</div>}
      </AppWrapper>
    );
  }
}

export default MainSkeleton;
