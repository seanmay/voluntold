// import Actions from "@product/domain-actions";
import Skills from "./actions";


export const addSkill = (skill) => ({
  type: Skills.ADD,
  payload: skill
});

export const removeSkill = (skill) => ({
  type: Skills.REMOVE,
  payload: skill
});

export const updateSkill = (skill) => ({
  type: Skills.UPDATE,
  payload: skill
});

export const updateInputText = (text) => ({
  type: Skills.UPDATE_INPUT_TEXT,
  payload: text
});

export const clearInputText = () => updateInputText("");

export default {
  addSkill,
  removeSkill,
  updateSkill,
  updateInputText,
  clearInputText
}