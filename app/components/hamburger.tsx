"use client"; // Mark as client-side to avoid SSR issues

import React from "react";
import styled from "styled-components";
import "app/styles/hamburger.css"; // Keep base styles

interface HamburgerProps {
  open: boolean;
}

// Styled container
const Container = styled.div`
  width: 40px;
  height: 30px;
  position: relative;
  display: flex;
`;

// Single Line component with conditional class-based styles
const Line = styled.div<{ open: boolean }>`
  position: absolute;
  background-color: ${(props) => (props.open ? "white" : "black")};
  border-radius: 9999px;
  transition: all 0.2s ease-in-out;

  &.line-top {
    width: ${(props) => (props.open ? "50%" : "60%")};
    right: 0;
    top: ${(props) => (props.open ? "-2px" : "0px")};
    transform: ${(props) =>
      props.open ? `rotate(${Math.asin(-30 / 50)}rad)` : "rotate(0deg)"};
    transform-origin: right;
  }

  &.line-center {
    width: ${(props) => (props.open ? "50px" : "40px")};
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%)
      ${(props) =>
        props.open ? `rotate(${Math.asin(30 / 50)}rad)` : "rotate(0deg)"};
  }

  &.line-bottom {
    width: 60%;
    bottom: ${(props) => (props.open ? "-2px" : "0px")};
    left: 0;
    transform: ${(props) =>
      props.open ? `rotate(${Math.asin(-30 / 50)}rad)` : "rotate(0deg)"};
    transform-origin: left;
  }
`;

const Hamburger: React.FC<HamburgerProps> = ({ open }) => {
  return (
    <Container>
      <Line open={open} className="line-top h-1" />
      <Line open={open} className="line-center h-1" />
      <Line open={open} className="line-bottom h-1" />
    </Container>
  );
};

export default Hamburger;
