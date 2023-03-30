import { CardActionArea, CardContent, CardMedia } from "@mui/material";
import styled from "styled-components";
import newsImage from "../../assets/img/news.jpg";

interface IArticleTileItem {
  title?: string;
  source?: string;
  date?: string;
  image?: string;
  description?: string;
  onClick?: () => void;
}

export const ArticleTileItem = ({
  image,
  title,
  description,
  date,
  source,
  onClick,
}: IArticleTileItem) => {
  return (
    <StyledArticleTile className={"card-container article"}>
      <CardActionArea onClick={onClick}>
        <CardMedia component="img" height="140" image={image ?? newsImage} />
        <CardContent>
          <h4>{title}</h4>
          {description && <p>{description}</p>}
        </CardContent>
        <div className="card-footer">
          <span>{source}</span>
          <span>{date}</span>
        </div>
      </CardActionArea>
    </StyledArticleTile>
  );
};

const StyledArticleTile = styled.div`
  &.card-container.article {
    width: 100%;
    max-width: 250px;
    border: 1px solid rgba(0, 0, 25, 0.2);
    background: rgba(0, 0, 25, 0.1);
    border-radius: 0.5rem;
    overflow: hidden;
  }

  button {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  .MuiCardContent-root {
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  img {
    object-fit: contain;
    background: rgba(0, 0, 25, 0.2);
  }

  h4 {
    margin: 0;
  }

  .card-footer {
    margin-top: auto;
    padding: 0.5rem;
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
`;
