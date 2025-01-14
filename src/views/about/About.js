import React, { useEffect, useState } from "react";
import {
  AwardDetails,
  PersonalDetails,
} from "../../components/constants/data/ConstantData";
import ProgressBar from "../../components/progressBar/ProgressBar";
import { SideBarContainer } from "../../components/sidebar/SideBarContainer";
import "./about.scss";

const About = () => {
  const { summary, description, img, skills } = PersonalDetails;
  const [image, setImage] = useState(null);
  useEffect(() => {
    img &&
      import(`../../assets/images/${img}`).then((image) =>
        setImage(image.default)
      );
  });
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-7">
          <div className="content">
            <h2 className="entry-title">About Me</h2>
            <figure className="personal-image">
              <img src={image} alt="Yahya" width={"320px"} height={"500px"} />
            </figure>
            <p className="leading">{summary}</p>
            <ProgressBar skills={skills} description={description} />
          </div>
        </div>
        <SideBarContainer Details={AwardDetails} title={"Awards"} />
      </div>
    </div>
  );
};

export default About;
