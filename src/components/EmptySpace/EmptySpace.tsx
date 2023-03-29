import React from "react";
import styled from "styled-components";

interface IEmptySpace {
  heightSpace?: number;
  widthSpace?: number;
}

export const EmptySpace = (props: IEmptySpace) => {
  return <EmptyBox {...props}></EmptyBox>;
};

const EmptyBox = styled.div<IEmptySpace>`
  width: ${({ widthSpace }) => widthSpace ?? 0}px;
  height: ${({ heightSpace }) => heightSpace ?? 0}px;
`;
