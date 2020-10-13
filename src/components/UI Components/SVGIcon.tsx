import React from "react";
import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const SVGIcon = (props: any) => {
  const { className } = props;
  return <StyledSVGIcon {...props} className={`${className}`} />;
};

const StyledSVGIcon = styled(FontAwesomeIcon)`
  font-size: ${(props) => (props.large ? "3rem" : "2rem")};
  color: ${({ theme }) => theme.colors.text};
  height: inherit;
`;
