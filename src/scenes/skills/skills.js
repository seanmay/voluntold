import React from "react";

import ItemList from "../../components/item-list";
import InputCombo from "../../components/input-combo";
import ClickableItem from "../../components/clickable-item";

const makeRemovable = (item, remove) =>
  <ClickableItem key={item} click={() => remove(item)} label="x">
    {item}
  </ClickableItem>

export default ({
  skills,
  input,
  addSkill,
  removeSkill,
  updateSkill,
  updateInputText,
  clearInputText,
}) => (
  <section >
    <header>
      <h2>Skills</h2>
    </header>
    <ItemList >
      { skills.map(skill => makeRemovable(skill, removeSkill)) }
    </ItemList>
    <InputCombo
      text={input}
      updateInput={updateInputText}
      submitInput={text => { clearInputText(); addSkill(text); } } />
  </section>
);