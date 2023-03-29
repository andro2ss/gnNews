import React from "react";
import styled from "styled-components";
import {
  IImageListItem,
  ImageListItem,
} from "../../../components/ImageListItem/ImageListItem";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

interface ICountryList extends IImageListItem {
  countryCode: string;
}

export const SidebarContent = () => {
  const navigate = useNavigate();

  const handleOnClick = (country: string, countryCode: string) => {
    navigate(`country/${country}?countryCode=${countryCode}`);
  };

  const countryList: ICountryList[] = [
    {
      imgSrc: "https://newsapi.org/images/flags/pl.svg",
      text: "Poland",
      countryCode: "pl",
    },
    {
      imgSrc: "https://newsapi.org/images/flags/ar.svg",
      text: "Argentina",
      countryCode: "ar",
    },
    {
      imgSrc: "https://newsapi.org/images/flags/br.svg",
      text: "Brazil",
      countryCode: "br",
    },
    {
      imgSrc: "https://newsapi.org/images/flags/jp.svg",
      text: "Japan",
      countryCode: "jp",
    },
    {
      imgSrc: "https://newsapi.org/images/flags/gb.svg",
      text: "United Kingdom",
      countryCode: "gb",
    },
    {
      imgSrc: "https://newsapi.org/images/flags/de.svg",
      text: "Germany",
      countryCode: "de",
    },
    {
      imgSrc: "https://newsapi.org/images/flags/cz.svg",
      text: "Czech Republic",
      countryCode: "cz",
    },
  ];

  return (
    <StyledSidebarContent>
      {countryList.map((country) => {
        return (
          <Button
            key={country.countryCode}
            onClick={() =>
              handleOnClick(country.text as string, country.countryCode)
            }
          >
            <ImageListItem
              alt={"country flag"}
              imgSrc={country.imgSrc}
              text={country.text}
            />
          </Button>
        );
      })}
    </StyledSidebarContent>
  );
};
const StyledSidebarContent = styled.div`
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  button {
    width: 100%;
    justify-content: flex-start;
  }
`;
