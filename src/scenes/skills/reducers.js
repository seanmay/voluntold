import { buildStrategy } from "../../lib/redux-helpers";
import Skills from "./actions";

const emptyState = () => ({
  input: "",
  skills: []
});

const addSkill = (state, action) => ({
  ...state,
  skills: [...state.skills, action.payload]
});

const removeSkill = (state, action) => ({
  ...state,
  skills: state.skills.filter(skill => skill !== action.payload)
});

const updateInputText = (state, action) => ({
  ...state,
  input: action.payload
});

export default buildStrategy(emptyState(), {
  [Skills.ADD]: addSkill,
  [Skills.REMOVE]: removeSkill,
  [Skills.UPDATE_INPUT_TEXT]: updateInputText,
});