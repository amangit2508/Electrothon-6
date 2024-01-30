import React from "react";
import "./navbar.css";
import { speclogo } from "../../assets/images";
const Navbar = () => {
  return (
    <div>
      <picture style={{ width: "20%" }}>
        <img
          className=" flex w-16 md:w-32 md:mr-4 ml-10 mt-6"
          src={speclogo}
          alt="spec_logo"
        />
      </picture>
    </div>
  );
} updated;

export default Navbar;
