import React, { useState } from "react";
import "./ApplicationTrackerSection.css";
import deleteImg from "../assets/delete.png";

const ApplicationTrackerSection = () => {
  const [applicationUpload, setApplicationUpload] = useState<boolean>(false);
  return (
    <div>
      {applicationUpload && <div>IF Application Upload</div>}
      <div className="app-notupload">
        <div className="imgContainer">
          <img className="tracker-img" src={deleteImg} />
        </div>
        <h1>No applications yet</h1>
        <p>Start tracking your job applications by adding your first one.</p>
      </div>
    </div>
  );
};

export default ApplicationTrackerSection;
