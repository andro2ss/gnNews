import { CardActionArea, CardContent, CardMedia } from "@mui/material";
import styled from "styled-components";

interface IArticleTileItem {
  title?: string;
  source?: string;
  date?: string;
  image?: string;
  description?: string;
}

export const ArticleTileItem = ({
  image,
  title,
  description,
  date,
  source,
}: IArticleTileItem) => {
  return (
    <StyledArticleTile className={"card-container article"}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={image}
          alt="green iguana"
        />
        <CardContent>
          <h4>{title}</h4>
          <p>{description}</p>
          <div className="card-footer">
            <span>{source}</span>
            <span>{date}</span>
          </div>
        </CardContent>
      </CardActionArea>
    </StyledArticleTile>
  );
};

const StyledArticleTile = styled.div`
  &.card-container.article {
    flex: 1 1 30%;
    max-width: 30%;
    border: 1px solid rgba(0, 0, 25, 0.2);
    background: rgba(0, 0, 25, 0.1);
    border-radius: 0.5rem;
    overflow: hidden;
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
    display: flex;
    justify-content: space-between;
  }
`;
