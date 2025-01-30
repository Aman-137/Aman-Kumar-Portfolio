import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://linkedin.com" target="_blank" aria-label="LinkedIn">
        <BsLinkedin />
      </a>
      <a href="https://github.com" target="_blank" aria-label="GitHub">
        <FaGithub />
      </a>
      <a
        href="https://discord.com/channels/@me"
        target="_blank"
        aria-label="Discord"
      >
        <FaDiscord />
      </a>
    </div>
  );
};

export default HeaderSocials;
