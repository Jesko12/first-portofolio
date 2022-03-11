import React from "react";
import { sidebarData } from "./sidebarData";
import SidebarMenu from "../../common/sidebarMenu";
import { Agrocery, SidebarNav, SidebarWrap } from "./SidebarElements";

const Logo = require("../../assets/images/logo.png");

const Sidebar = ({ user, clicked }) => (
  <SidebarNav clicked={clicked}>
    <SidebarWrap>
      <Agrocery>
        <img
          style={{
            width: "60px",
            height: "60px",
            borderRadius: "30px",
          }}
          src={Logo}
          alt="Memoji"
        />
        <p>{user["FirstName"]}</p>
      </Agrocery>
      {sidebarData.map((item) => {
        return <SidebarMenu item={item} key={item.title} />;
      })}
    </SidebarWrap>
  </SidebarNav>
);

export default Sidebar;
