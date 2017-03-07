import React from "react";

export default ({ click, children, label }) => (
  <span >{children}<button onClick={click}>{label || "x"}</button></span>
);