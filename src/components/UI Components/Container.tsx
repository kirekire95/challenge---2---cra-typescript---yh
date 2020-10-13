import React from "react";
import styled from "@emotion/styled";

import { ThemeProps } from "../../utilities/interface";

export const Container = (props: ThemeProps) => {
  const { className, children } = props;
  return (
    <StyledContainer {...props} className={`${className}`}>
      {children}
    </StyledContainer>
  );
};

const StyledContainer = styled.section`
  min-height: inherit;
  max-width: ${(props: ThemeProps) => props.theme.sizes.container[2]};
  margin: ${(props: ThemeProps) => props.theme.space[1]};
  padding: 0 0 2rem 0;
  @media (min-width: 500px) {
    width: ${(props: ThemeProps) => props.theme.sizes.percent[2]};
  }
`;

export const ContainerSmall = (props: any) => {
  const { className, children } = props;
  return (
    <StyledContainerSmall {...props} className={`${className}`}>
      {children}
    </StyledContainerSmall>
  );
};

const StyledContainerSmall = styled.div`
  min-height: inherit;
  max-width: ${(props: ThemeProps) => props.theme.sizes.container[0]};
  margin: ${(props: ThemeProps) => props.theme.space[1]};
  @media (min-width: 500px) {
    width: ${(props: ThemeProps) => props.theme.sizes.percent[2]};
  }
`;

export const ContainerFlex = (props: any) => {
  const { className, children } = props;
  return (
    <StyledContainerFlex {...props} className={`${className}`}>
      {children}
    </StyledContainerFlex>
  );
};

const StyledContainerFlex = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: inherit;
  max-width: inherit;
  width: inherit;
  margin: auto;
`;

export const ContainerGrid = (props: any) => {
  const { className, children } = props;
  return (
    <StyledGridContainer {...props} className={`${className}`}>
      {children}
    </StyledGridContainer>
  );
};

const StyledGridContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  padding: ${(props: ThemeProps) => props.theme.spaceX[4]};
`;
