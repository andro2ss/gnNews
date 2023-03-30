import React from "react";
import styled from "styled-components";

interface IEmptySpace {
  heightSpace?: number;
  widthSpace?: number;
  className?: string;
}

export const EmptySpace = (props: IEmptySpace) => {
  return <EmptyBox {...props}></EmptyBox>;
};

const EmptyBox = styled.div<IEmptySpace>`
  min-width: ${({ widthSpace }) => widthSpace ?? 0}px;
  max-width: ${({ widthSpace }) => widthSpace ?? 0}px;
  height: ${({ heightSpace }) => heightSpace ?? 0}px;
`;
