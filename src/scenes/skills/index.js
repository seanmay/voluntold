import { connect } from "react-redux";

import selectors from "./selectors";
import creators from "./creators";

import SkillsPage from "./skills";

const SkillsScene = connect(selectors, creators)(SkillsPage);
export default SkillsScene;