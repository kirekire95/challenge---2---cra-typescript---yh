import styled from "@emotion/styled";

export const Profile = styled.div`
  position: relative;
  width: 60px;
  height: inherit;
  cursor: pointer;

  figure {
    display: flex;
    justify-content: center;
    align-items: center;
    height: inherit;
    width: inherit;
  }

  img {
    width: 44px;
    height: 44px;
    object-fit: cover;
    border-radius: 50%;
  }
`;

export const ProfileUL = styled.ul`
  list-style: none;
  padding: 0;
  &.closed {
    display: none;
  }

  &.open {
    position: absolute;
    right: 0;
    top: 100%;
    background-color: inherit;
    color: ${(props: any) => props.theme.colors.text};
    border-bottom-left-radius: 5px;
  }
`;
