import React, { useEffect, useState } from "react";
import "./nav.css";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiBook, BiMessageDetail } from "react-icons/bi";
import { BsBriefcase } from "react-icons/bs";
import { RiServiceLine } from "react-icons/ri";

const navItems = [
  { hash: "#home", label: "home", icon: <AiOutlineHome /> },
  { hash: "#about", label: "about", icon: <AiOutlineUser /> },
  { hash: "#work", label: "work experience", icon: <BsBriefcase /> },
  { hash: "#skills", label: "skills", icon: <BiBook /> },
  { hash: "#services", label: "services", icon: <RiServiceLine /> },
  { hash: "#contact", label: "contact", icon: <BiMessageDetail /> },
];

const Nav = () => {
  const [activeNav, setActiveNav] = useState(navItems[0].hash);

  useEffect(() => {
    const syncActiveNav = () => {
      // Anything above a third of the viewport counts as "reached".
      const threshold = window.innerHeight / 3;
      let current = navItems[0].hash;

      navItems.slice(1).forEach(({ hash }) => {
        const section = document.querySelector(hash);
        if (section && section.getBoundingClientRect().top <= threshold) {
          current = hash;
        }
      });

      setActiveNav(current);
    };

    syncActiveNav();
    window.addEventListener("scroll", syncActiveNav, { passive: true });
    window.addEventListener("resize", syncActiveNav);

    return () => {
      window.removeEventListener("scroll", syncActiveNav);
      window.removeEventListener("resize", syncActiveNav);
    };
  }, []);

  return (
    <nav>
      {navItems.map(({ hash, label, icon }) => (
        <a
          key={hash}
          href={hash}
          onClick={() => setActiveNav(hash)}
          className={activeNav === hash ? "active" : ""}
          aria-label={label}
          aria-current={activeNav === hash ? "page" : undefined}
        >
          {icon}
        </a>
      ))}
    </nav>
  );
};

export default Nav;
