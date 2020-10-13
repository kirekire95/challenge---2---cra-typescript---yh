import React from "react";
import styled from "@emotion/styled";

export const Error = (props: any) => {
  const { message } = props;
  return (
    <ErrorStyles>
      <h1>{message}</h1>
      <span className="emoticon" role="img" aria-label="Girl Emoticon">
        🤦‍♀️
      </span>
    </ErrorStyles>
  );
};

Error.defaultProps = {
  message: "An error has occured...",
};

const ErrorStyles = styled.div`
  text-align: center;
`;
