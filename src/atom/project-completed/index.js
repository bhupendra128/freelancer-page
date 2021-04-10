import React from "react";

const ProjectCompleted = ({ data }) => {
  return (
    <p className="project-completed">
      <span>projects_completed</span>
      <span>: </span>
      <span>{data}</span>
    </p>
  );
};

export default ProjectCompleted;
