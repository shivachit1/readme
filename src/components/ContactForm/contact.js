import React from "react";
import "./index.css";

const Contact = () => {
  return (
    <div className="contact">
      <div className="divider"></div>
      <div>
        <h2>Contact us</h2>
        <p>RecordKeep Oy</p>
        <div className="email-div">
          <p>Email :</p>
          <a className="link" href="mailto:gopal@recordkeep.fi">
            <p>gopal@recordkeep.fi</p>
          </a>
        </div>

        <p>Contact : +358503797561</p>
        <p>Address : Vilhonvuorenkatu 12, 00500 Helsinki</p>
      </div>
    </div>
  );
};

export default Contact;
