"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faFacebook,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
interface SocialNetworkProps {
  github?: string;
  linkedin?: string;
  envelope?: string;
  twitter?: string;
  facebook?: string;
}

const SocialNetwork: React.FC<SocialNetworkProps> = ({
  github = undefined,
  linkedin = undefined,
  envelope = undefined,
  twitter = undefined,
  facebook = undefined,
}) => {
  const renderIcon = (icon: React.ReactNode, link?: string) => {
    if (link) {
      return (
        <span
          key={link}
          className="mr-4 cursor-pointer"
          onClick={() => window.open(link, "_blank")}
        >
          {icon}
        </span>
      );
    }
    return null;
  };

  return (
    <div className="text-black text-3xl mt-12">
      {renderIcon(<FontAwesomeIcon icon={faGithub} />, github)}
      {renderIcon(<FontAwesomeIcon icon={faLinkedin} />, linkedin)}
      {renderIcon(<FontAwesomeIcon icon={faEnvelope} />, envelope)}
      {renderIcon(<FontAwesomeIcon icon={faXTwitter} />, twitter)}
      {renderIcon(<FontAwesomeIcon icon={faFacebook} />, facebook)}
    </div>
  );
};

export default SocialNetwork;
