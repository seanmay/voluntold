export default (state) => {
  console.log(state);
  return {
    input: state.skillsPage.input,
    skills: state.skillsPage.skills
  };
};