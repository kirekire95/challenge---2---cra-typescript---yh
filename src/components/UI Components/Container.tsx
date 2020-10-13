import React from "react"
import styled from "@emotion/styled"

export const Container = props => {
  return (
    <StyledContainer {...props} className={`${props.className}`}>
      {props.children}
    </StyledContainer>
  )
}

const StyledContainer = styled.section`
  min-height: inherit;
  max-width: ${({ theme }) => theme.sizes.container[2]};
  margin: ${({ theme }) => theme.space[1]};
  padding: 0 0 2rem 0;
  @media (min-width: 500px) {
    width: ${({ theme }) => theme.sizes.percent[2]};
  }
`

export const ContainerSmall = props => {
  return (
    <StyledContainerSmall {...props} className={`${props.className}`}>
      {props.children}
    </StyledContainerSmall>
  )
}

const StyledContainerSmall = styled.div`
  min-height: inherit;
  max-width: ${({ theme }) => theme.sizes.container[0]};
  margin: ${({ theme }) => theme.space[1]};
  @media (min-width: 500px) {
    width: ${({ theme }) => theme.sizes.percent[2]};
  }
`

export const ContainerFlex = props => {
  return (
    <StyledContainerFlex {...props} className={`${props.className}`}>
      {props.children}
    </StyledContainerFlex>
  )
}

const StyledContainerFlex = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: inherit;
  max-width: inherit;
  width: inherit;
  margin: auto;
`

export const ContainerGrid = props => {
  return (
    <StyledGridContainer {...props} className={`${props.className}`}>
      {props.children}
    </StyledGridContainer>
  )
}

const StyledGridContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  padding: ${({ theme }) => theme.spaceX[4]};
`
