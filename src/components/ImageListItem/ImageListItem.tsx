import React from "react";
import styled from "styled-components";

export interface IImageListItem {
  alt?: string;
  imgSrc?: string;
  text?: string;
}

export const ImageListItem = ({ alt, imgSrc, text }: IImageListItem) => {
  return (
    <StyledImageListItem>
      <img src={imgSrc} alt={alt} />
      <span>{text}</span>
    </StyledImageListItem>
  );
};

const StyledImageListItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  img {
    height: 1.5rem;
  }
`;
