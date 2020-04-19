import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const socialIcons = [
  {
    path: "https://www.facebook.com/TomRolfeWeb",
    icon: faFacebook,
    colour: "#4770D1",
    padding: "p-2",
  },
  {
    path: "mailto:tomrolfemail@gmail.com",
    icon: faEnvelope,
    colour: "#FF0000",
    padding: "p-4",
  },
  {
    path: "https://github.com/ThomasRolfe",
    icon: faGithub,
    colour: "#000000",
    padding: "p-2",
  },
  {
    path: "https://www.linkedin.com/in/tom-rolfe-a4783861/",
    icon: faLinkedinIn,
    colour: "#2678B5",
    padding: "p-4",
  },
];

const SocialGroup = (props) => {
  return (
    <div className="flex justify-center">
      {socialIcons.map((social, index) => {
        return (
          <a
            href={social.path}
            key={index}
            target="_blank"
            rel="noopener noreferrer"
            className="mx-3"
          >
            <FontAwesomeIcon
              icon={social.icon}
              size={props.size}
              style={{ color: social.colour }}
            />
          </a>
        );
      })}
    </div>
  );
};

export default SocialGroup;
