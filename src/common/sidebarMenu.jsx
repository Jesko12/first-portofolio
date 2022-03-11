import React, { Fragment, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const SidebarLink = styled(Link)`
  display: flex;
  color: #1e212d;
  justify-content: space-between;
  text-decoration: none;
  align-items: center;
  list-style: none;
  height: 40px;
  font-size: 0.9rem;
  padding: 20px;
  margin-top: 0.5rem;
  font-weight: 600;

  @media (min-width: 1024px) {
    display: flex;
    color: #1e212d;
    justify-content: space-between;
    align-items: center;
    list-style: none;
    height: 40px;
    font-size: 0.9rem;
    padding: 20px;
    margin-top: 0.5rem;
  }

  &:hover {
    color: #1e212d;
    border-left: 4px solid #05807C;
    cursor: pointer;
    text-decoration: none;
  }
`;

const SidebarLabel = styled.span`
  text-decoration: none;
  margin-left: 1rem;
`;

const DropdownLink = styled(Link)`
  height: 40px;
  padding-left: 3rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #1e212d;
  font-size: 0.9rem;

  &:hover {
    text-decoration: none;
    cursor: pointer;
    color: #314e52;
  }
`;

const SidebarLinkContainer = styled.div`
  width: 100%;
  height: inherit;
  transition: 350ms;
  display: flex;
  align-items: center;
  justify-content: "flex-start";
`;

const SidebarMenu = ({ item, sidebar }) => {
  const [subnav, setSubnav] = useState(false);

  const showSidenav = () => setSubnav(!subnav);

  return (
    <Fragment>
      <SidebarLink to={item.path} onClick={item.subNav && showSidenav}>
        <SidebarLinkContainer opened={sidebar}>
          {item.icon}
          <SidebarLabel className="fade-in">{item.title}</SidebarLabel>
        </SidebarLinkContainer>
        <div>
          {item.subNav && subnav
            ? item.iconOpened
            : item.subNav
            ? item.iconClosed
            : null}
        </div>
      </SidebarLink>
      {subnav &&
        item.subNav.map((item, index) => {
          return (
            <DropdownLink to={item.path} key={index} className="fade-in">
              {item.icon}
              <SidebarLabel>{item.title}</SidebarLabel>
            </DropdownLink>
          );
        })}
    </Fragment>
  );
};

export default SidebarMenu;
