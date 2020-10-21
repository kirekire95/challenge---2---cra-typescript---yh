import React from "react"
import styled from "@emotion/styled"

export const Container = (props: any) => {
  const { className, children } = props
  return (
    <StyledContainer {...props} className={`${className}`}>
      {children}
    </StyledContainer>
  )
}

const StyledContainer = styled.section`
  min-height: inherit;
  max-width: ${(props: any) => props.theme.sizes.container[2]};
  width: 90%;
  margin: ${(props: any) => props.theme.space[1]};
  padding-bottom: ${(props: any) => props.theme.space[6]};
`

export const ContainerSmall = (props: any) => {
  const { className, children } = props
  return (
    <StyledContainerSmall {...props} className={`${className}`}>
      {children}
    </StyledContainerSmall>
  )
}

const StyledContainerSmall = styled.div`
  min-height: inherit;
  max-width: ${(props: any) => props.theme.sizes.container[0]};
  margin: ${(props: any) => props.theme.space[1]};
  @media (min-width: 500px) {
    width: ${(props: any) => props.theme.sizes.percent[2]};
  }
`

export const ContainerFlex = (props: any) => {
  const { className, children } = props
  return (
    <StyledContainerFlex {...props} className={`${className}`}>
      {children}
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

export const ContainerFlexMedium = (props: any) => {
  const { className, children } = props
  return (
    <StyledContainerFlexMedium {...props} className={`${className}`}>
      {children}
    </StyledContainerFlexMedium>
  )
}

const StyledContainerFlexMedium = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: inherit;
  width: ${(props: any) => props.theme.sizes.percent[1]};
  max-width: 450px;
  margin: auto;
`

export const ContainerGrid = (props: any) => {
  const { className, children } = props
  return (
    <StyledGridContainer {...props} className={`${className}`}>
      {children}
    </StyledGridContainer>
  )
}

const StyledGridContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${(props: any) => props.theme.space[6]};
  padding: ${(props: any) => props.theme.spaceX[4]};
`
