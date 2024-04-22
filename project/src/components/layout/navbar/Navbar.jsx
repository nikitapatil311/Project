import React from "react";

const Navbar = (props) => {
  return (
    <>
      <div className="navbar text-bg-dark navbar-expand-sm">
        <div className="container">
          <a href="" className="navbar-brand text-light">
            {props.header}
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
