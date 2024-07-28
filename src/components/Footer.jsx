import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="footer footer-center font-medium text-base p-4">
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - Created by Insharah Ayyubi
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
