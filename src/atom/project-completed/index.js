import React from "react";

/**
 * ProjectCompleted Component that will create ProjectCompleted
 * @param  {object} having all required attributes such as data
 */

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
