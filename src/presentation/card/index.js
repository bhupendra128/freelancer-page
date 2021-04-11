import React from "react";
import Image from "../../atom/image";
import Link from "../../atom/link";
import ProjectCompleted from "../../atom/project-completed";
import Specializations from "../../atom/specializations";
import { Link as RouterLink } from "react-router-dom";
import Rating from "../../atom/rating";
import "./card.scss";

/**
 * Card Component that will create card of the user
 * @param  {object} having all required attributes data
 */

const Card = ({ data }) => {
  const {
    first_name,
    last_name,
    image,
    projects_completed,
    email,
    specializations,
    avg_ratings,
    circleColor,
    id,
  } = data;

  const fullName = `${first_name} ${last_name}`;
  const imageObj = {
    src: image,
    alt: fullName,
  };
  return (
    <div className="c-card">
      <RouterLink to={`/profile-detail/${id}`}>
        <div className="top">
          <div className="left-section">
            <h3 className="heading heading-3">{fullName}</h3>
            <ProjectCompleted data={projects_completed} />
            <Link link={email}>{email}</Link>
          </div>
          <div className="right-section">
            <Image image={imageObj} />
          </div>
        </div>
        <div className="bottom">
          <Specializations data={specializations} className={circleColor} />
          <Rating data={avg_ratings} />
        </div>
      </RouterLink>
    </div>
  );
};

export default Card;
