const initState = {
  projects: []
};
const ProjectReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_PROJECT":
      console.log("created project");
      return state;
    case "CREATE_PROJECT_ERROR":
      console.log("create project error", action.error.message);
      return state;
    default:
      return state;
  }
};

export default ProjectReducer;
