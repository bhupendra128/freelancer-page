import React, { useContext, useCallback } from "react";
import Image from "../../atom/image";
import Link from "../../atom/link";
import { BackIcon, LocationIcon } from "../../assets/image";
import Rating from "../../atom/rating";
import ProjectCompleted from "../../atom/project-completed";
import Specializations from "../../atom/specializations";
import Button from "../../atom/button";
import { useParams } from "react-router";
import { AppContext } from "../../context/AppContext";
import "./card-details.scss";

/**
 * CardDetails Component that will create profile detail component
 */

const CardDetails = () => {
  const { id } = useParams();
  const { initialData } = useContext(AppContext);
  const handleProceedBtn = () => {
    //TODO: Add proceed btn logic
    console.log("handleProceedBtn");
  };

  const renderCardDetails = useCallback(() => {
    const profileData =
      initialData.find((item) => item.id === parseInt(id)) || {};
    const {
      first_name,
      last_name,
      image,
      avg_ratings,
      projects_completed,
      email,
      about,
      specializations,
      circleColor,
      address,
    } = profileData;
    const fullName = `${first_name} ${last_name}`;
    const img = {
      src: image,
      alt: fullName,
    };
    if (!Object.keys(profileData).length) return null;
    return (
      <>
        <Image image={img} />
        <Link link="/" className="image-top">
          <BackIcon />
        </Link>
        <Rating data={avg_ratings} />
        <div className="card-contents">
          <h2 className="heading-2">{fullName}</h2>
          <Link link={email} className="email" label={email} />
          <ProjectCompleted data={projects_completed} />
          <p className="about">{about}</p>
          <div className="bottom">
            <Specializations data={specializations} className={circleColor} />
            <div className="locations">
              <LocationIcon />
              <p className="address">{address}</p>
            </div>
            <Button className="proceed" onClick={handleProceedBtn}>
              Proceed
            </Button>
          </div>
        </div>
      </>
    );
  }, [id, initialData]);

  return <div className="c-card-details">{renderCardDetails()}</div>;
};

export default CardDetails;
