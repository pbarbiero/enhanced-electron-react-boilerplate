import React from 'react';
import { HashRouter as Router, NavLink } from 'react-router-dom'

const Menu = () => {
  return (
    <Router>
      <nav className="nav-group">
        <h5 className="nav-group-title">Navigation</h5>
        <MenuRow path="" label="Home" icon="home" />
        <MenuRow path="example" label="Example Page" icon="chart-bar" />
      </nav>
    </Router>
  );
}

const MenuRow = (props) => {
  return (
    <NavLink to={"/" + props.path} className="nav-group-item" activeClassName="active" exact={true}>
      <span className={"icon icon-" + props.icon}></span>
      {props.label}
    </NavLink>
  )
}

export default Menu;
