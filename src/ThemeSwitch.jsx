import React from "react";
import styled from "styled-components";
import { animated, useTransition } from "react-spring";

const StyledButton = styled.button`
  align-items: center;
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: inline-flex;
  font-size: 1rem;
  outline: none;
  position: relative;
`;

const StyledIndicator = styled(animated.span)`
  font-size: 1.2rem;
  right: 0;
`;

const ThemeSwitch = ({ theme, toggleTheme }) => {
  const getTransform = item =>
    item === "light" ? "translateY(50px)" : "translateY(-50px)";

  const transitions = useTransition(theme, null, {
    from: item => ({
      position: "absolute",
      opacity: 0,
      transform: getTransform(item)
    }),
    enter: { opacity: 1, transform: "translateY(0)" },
    leave: item => ({
      opacity: 0,
      transform: getTransform(item)
    })
  });

  return (
    <StyledButton onClick={toggleTheme}>
      {transitions.map(({ item, key, props }) =>
        item === "dark" ? (
          <StyledIndicator style={props} key={key}>
            🌙
          </StyledIndicator>
        ) : (
          <StyledIndicator style={props} key={key}>
            ☀️
          </StyledIndicator>
        )
      )}
    </StyledButton>
  );
};

export default ThemeSwitch;
