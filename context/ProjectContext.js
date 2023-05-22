import { createContext, useState } from "react";
export const projectContext = createContext();

export const ProjectProvider = ({ children }) => {
  const projectIninitalForm = {
    Slug: "",
    Title: "",
    Country: "",
    VideoUrl: "",
    KushInvolment: "",
    ProjectDescription: "",
  };
  const [project, setProject] = useState({});
  const [projectForm, setProjectForm] = useState(projectIninitalForm);
  const [projectList, setProjectList] = useState([]);
  return (
    <projectContext.Provider value={{
      projectIninitalForm,
      setProjectList,
      setProjectForm,
      projectList,
      projectForm,
      setProject,
      project,
    }}>
      {children}
    </projectContext.Provider>
  );
};
