import React from "react";
import ProjectItem from "./ProjectItem";
import user from "../data/user";

const projList = user.projects.map((projObj) => {
  return <ProjectItem key={projObj.id} 
  name={projObj.name}
  about={projObj.about}
   technologies={projObj.technologies}/>
})
function ProjectList({ projects }) {
  console.log(projects);
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">
     {projList}        
      </div>
    </div>
  );
}

export default ProjectList;
