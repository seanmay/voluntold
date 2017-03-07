import React from "react";

export default ({ children = [] }) => (
  <ul>
    { children.map((child, i) =>
        <li key={ child.id || child.uid || i}>{child}</li>)
    }
  </ul>
);