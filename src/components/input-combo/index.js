import React from "react";

export default ({ text, updateInput, submitInput }) => (
  <div >
    <input value={text}
           onInput={ e => updateInput(e.target.value) }
    /><button onClick={() => submitInput(text)}>submit</button>
  </div>
);