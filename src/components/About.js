import React, { useState } from "react";
import linkedInIcon from "../images/linkedIn.svg";
import gitHubIcon from "../images/gitHub.svg";
import gmailIcon from "../images/gmail.svg";
import thusharaProfilePic from "../images/sampleProfile.png";
import CopyMessage from "./CopyMessage";

export default function About() {
  return (
    <div>
      <div className="mt-10 flex flex-col items-center justify-between">
        <div className="w-screen flex justify-around">
          <DeveloperCard
            role={"Front End"}
            name={"Thushara Dilshan"}
            imageUrl={thusharaProfilePic}
            linkedIn={"www.linkedin.com/in/thushara-abeykoon/"}
            gmail={"someone@gmail.com"}
            gitHub={"github.com/thushara-abeykoon"}
          />
          <DeveloperCard
            role={"Back End"}
            name={"Gotabaya Wimukthi"}
            imageUrl={thusharaProfilePic}
            linkedIn={"www.linkedin.com/in/gotabaya-vimukthi-a12257275/"}
            gmail={"someone@gmail.com"}
            gitHub={"github.com/GotabayaV"}
          />
        </div>
      </div>
    </div>
  );
}

function DeveloperCard({ role, name, imageUrl, linkedIn, gmail, gitHub }) {
  const [copyMessageActive, setCopyMessageActive] = useState(false);
  return (
    <div className=" shadow-2xl flex flex-col items-center p-10 bg-white rounded-xl w-96 h-3/4 backdrop-blur-sm">
      <h3 className="text-xl font-bold">{name}</h3>
      <h3 className="text-sm">{role}</h3>
      <img
        src={imageUrl}
        alt=""
        width="200px"
        className="my-10 rounded-full shadow-xl"
      />
      <div className="flex items-center justify-around w-full">
        <a href={`https://${linkedIn}`} target="_blank">
          <img src={linkedInIcon} alt="linkedInIcon" width="45px" />
        </a>
        <img
          src={gmailIcon}
          alt="gmailIcon"
          width="40px"
          className="cursor-pointer"
          onClick={() => {
            navigator.clipboard.writeText(gmail);
            setCopyMessageActive(true);
            setTimeout(() => {
              setCopyMessageActive(false);
            }, 900);
          }}
        />
        <a href={`https://${gitHub}`} target="_blank">
          <img src={gitHubIcon} alt="gitHubIcon" width="40px" />
        </a>
      </div>
      <CopyMessage activeStatus={copyMessageActive} />
    </div>
  );
}
