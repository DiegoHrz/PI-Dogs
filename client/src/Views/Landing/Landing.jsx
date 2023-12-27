import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom";

const Landing = () => {
  return (
    <div>
      <div>Landing</div>
      <div>
        <Link to={'/home'} ><button><h1>METELA</h1></button></Link>
      </div>
    </div>
  );
};

export default Landing;
