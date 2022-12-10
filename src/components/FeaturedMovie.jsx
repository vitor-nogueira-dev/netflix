import React from "react";
import "./FeaturedMovie.css";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

const FeaturedMovie = ({ item }) => {
  const firstDate = new Date(item.first_air_date);
  let genres = [];
  for (let index in item.genres) {
    genres.push(item.genres[index].name);
  }

  return (
    <section
      className="featured"
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`,
      }}
    >
      <div className="featured--vertical">
        <div className="featured--horizontal">
          <div className="featured--name">{item.original_name}</div>
          <div className="featured--info">
            <div className="featured--points">
              {item.vote_average.toFixed(1)} pontos
            </div>
            <div className="featured--year">{firstDate.getFullYear()}</div>
            <div className="featured--seasons">
              {item.number_of_seasons} temporada
              {item.number_of_seasons !== 1 ? "s" : ""}{" "}
            </div>
          </div>
          <div className="featured--description">{`${item.overview.substring(
            0,
            180
          )}...`}</div>
          <div className="featured--buttons">
            <a href={`/watch/${item.id}`} className="featured--watchbutton">
              {" "}
              <PlayArrowIcon /> Assistir
            </a>
            <a href={`/list/add/${item.id}`} className="featured--mylistbutton">
              {" "}
              + Minha Lista
            </a>
          </div>
          <div className="featured--genres">
            <strong>Gêneros: {genres.join(", ")}</strong>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedMovie;
