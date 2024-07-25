/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { Link } from 'react-scroll';

const Menu = ({ openMenu }) => (
    <div css={styles} className={openMenu ? "menu" : "hidden"}>
        <Link to="hero" smooth={true} duration={500}>Home</Link>
        <Link to="joinus" smooth={true} duration={500}>About Us</Link>
        <Link to="pricing" smooth={true} duration={500}>Pricing</Link>
        <Link to="features" smooth={true} duration={500}>Services</Link>
        <Link to="bmi" smooth={true} duration={500}>BMI Check</Link>
        <Link to="trainers" smooth={true} duration={500}>Trainers</Link>


    </div>
);


///** @jsx jsx */
//import { css, jsx } from '@emotion/core';
//import { Link } from 'react-scroll';
//
//const Menu = ({ openMenu }) => {
//    return (
//        <ul css={styles} className={openMenu ? "openMenu" : ""}>
//            <li><Link to="hero" smooth={true} duration={500}>Home</Link></li>
//            <li><Link to="joinus" smooth={true} duration={500}>Join Us</Link></li>
//            <li><Link to="features" smooth={true} duration={500}>Features</Link></li>
//            <li><Link to="sale" smooth={true} duration={500}>Sale</Link></li>
//            <li><Link to="pricing" smooth={true} duration={500}>Pricing</Link></li>
//            <li><Link to="bmi" smooth={true} duration={500}>BMI</Link></li>
//            <li><Link to="trainers" smooth={true} duration={500}>Trainers</Link></li>
//            <li><Link to="summer" smooth={true} duration={500}>Summer</Link></li>
//        </ul>
//    );
//};
//






const styles = css`
  a {
    text-decoration: none;
    text-transform: uppercase;
    display: inline-block;
    font-size: 15px;
    font-weight: 600;
    color: #fff;
    margin: 0 22px;
    position: relative;
    transition: color 700ms ease-in-out;
    &::after {
      position: absolute;
      content: "";
      background: #ff1414;
      width: 100%;
      height: 3px;
      bottom: -33px;
      left: 0;
      opacity: 0;
      transition: opacity 700ms ease-in-out;
    }
    &:hover {
      color: #ff1414;
      &::after {
        opacity: 1;
      }
    }
  }
  @media (max-width: 1225px) {
    padding: 80px 40px;
    z-index: 30;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 1;
    min-height: 96vh;
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 320px;
    background: #060706;
    transition: left 600ms ease-in-out, opacity 600ms ease-in-out;
    &.hidden {
      left: -500px;
      opacity: 0;
    }
    a {
      margin: 0 0 20px 0;
      font-size: 25px;
      text-align: left;
      user-select: none;
      &:hover {
        color: #fff;
        &::after {
          opacity: 0;
        }
      }
    }
  }
`;

export default Menu;