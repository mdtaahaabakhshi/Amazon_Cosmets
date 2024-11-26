import React from "react";
import css from "./Footer.module.css";
import Logo from "../../assets/logo.png";
import {
  InboxIcon,
  PhoneIcon,
  LocationMarkerIcon,
  LoginIcon,
  UserIcon,
  LinkIcon,
} from "@heroicons/react/outline";
const Footer = () => {
  return (
    <div className={css.cFooterWrapper}>
      <hr />
      <div className={css.cFooter}>
        <iv className={css.logo}>
          <img src={Logo} />
          <span>amazon</span>
        </iv>

        <div className={css.block}>
          <div className={css.detail}>
            <span>Contact Us</span>
            <span className={css.pngLine}>
              <LocationMarkerIcon className={css.icon} />
              <span>111 north avenue orlando, Fl 32801</span>
            </span>
            <span className={css.pngLine}>
              <PhoneIcon className={css.icon} />
              <a href="tel:352-306-4415">352-306-4415</a>
            </span>

            <span className={css.pngLine}>
              <InboxIcon className={css.icon} />
              <a href="mailto:support.@amazon.com">support.@amazon.com</a>
            </span>
          </div>
        </div>
        <div className={css.block}>
          <div className={css.detail}>
            <span>Account</span>
            <span className={css.pngLine}>
              <LoginIcon className={css.icon} />
              <span>Sign in</span>
            </span>
          </div>
        </div>

        <div className={css.block}>
          <div className={css.detail}>
            <span>Company</span>
            <span className={css.pngLine}>
              <UserIcon className={css.icon} />
              {/* <span>About us</span> */}
              <a href="/about">About Us</a>
            </span>
          </div>
        </div>
        <div className={css.block}>
          <div className={css.detail}>
            <span>Resources</span>
            <span className={css.pngLine}>
              <LinkIcon className={css.icon} />
              <span>Safety privacy & terms</span>
              {/* <p>Safety privacy & terms</p> */}
            </span>
          </div>
        </div>
      </div>
      <div className={css.copyRight}>
        <span>Copyright ©2024 Bakhshi's Development, Inc. </span>
        <span> All rights reserved </span>
       
      </div>
    </div>
  );
};

export default Footer;
