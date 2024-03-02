import React from "react";
import ThemeSwitchButton from "./theme-switch-button";
import Link from "next/link";

const nav = [
  { navlink: "/home", navlabel: "Home" },
  { navlink: "/blogs", navlabel: "Blog" },
  { navlink: "/team", navlabel: "Team" },
  { navlink: "/advisors", navlabel: "Advisors" },
  { navlink: "/investors", navlabel: "Investors" },
  { navlink: "/about", navlabel: "About" },
  { navlink: "/contact", navlabel: "Contact" },
];

const Footer = () => {
  return (
    <footer className="block-space border-2">
      <div className="big-container grid grid-cols-4 lg:gap-12">
        <div>
          <h3>Hero Technologies</h3>
          <span>
            Publicly-traded independent sponsor with a strategic niche in
            technology, hardware manufacturing, financial services, business
            services, telecom, and transportation.
          </span>
        </div>
        <div>
          <h4 className="">Quick Links</h4>
          {nav.map((item, index) => {
            return (
              <div key={index} className="">
                <Link href={item.navlink}>{item.navlabel}</Link>
              </div>
            );
          })}
        </div>
        <div>
          <h4>Contact Us</h4>
          <span className="block">info@herotechnologiesinc.com </span>
          <span>(302) 538-4165</span>
        </div>
        <div>
          <h4>Preferences</h4>
          <ThemeSwitchButton />
        </div>
      </div>

      <div className="text-center mt-8">
        <span>
          Copyright 2023-2024 HERO TECHNOLOGIES INC. © All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
