import React from "react";
import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { ThemeProps, StyledProps } from "../../utilities/interface";

export const SVGIcon = (props: any) => {
  const { className } = props;
  return <StyledSVGIcon {...props} className={`${className}`} />;
};

// font-size: ${(props: StyledProps) => (props.large ? "3rem" : "2rem")};
const StyledSVGIcon = styled(FontAwesomeIcon)`
  font-size: 2rem;
  color: ${(theme: ThemeProps) => theme?.colors?.text};
  height: inherit;
`;
