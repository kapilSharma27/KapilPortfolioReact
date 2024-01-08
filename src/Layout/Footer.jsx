import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div>
      <footer>
        <span>
          Created By
          <Link to="https://github.com/kapilEtelligens">Kapil Sharma</Link> |
          <span className="far fa-copyright"></span> 2021
          <Link to="https://github.com/kapilEtelligens/Kapil-Sharma-Privacy-policy/blob/main/README.md">
            Privacy Policy
          </Link>
        </span>
      </footer>
    </div>
  );
};

export default Footer;
