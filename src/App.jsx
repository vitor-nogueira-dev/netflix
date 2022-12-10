import React, { useEffect, useState } from "react";
import Tmdb from "./Tmdb";
import MovieRow from "./components/MovieRow";

import "./App.css";
import FeaturedMovie from "./components/FeaturedMovie";

const App = () => {
  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);

  useEffect(() => {
    const loadAll = async () => {
      // pegando a lista total
      const list = await Tmdb.getHomeList();
      setMovieList(list);
      
      // Pegando o featured 
      const originals = list.filter(item => item.slug === 'originals');
      const randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1))
      const chosen = originals[0].items.results[randomChosen];
      const chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv');
      setFeaturedData(chosenInfo)
    };
    loadAll();
  }, []);
  return (
    <div className="page">
      {featuredData && <FeaturedMovie item={featuredData} />}

      <section className="lists">
        {movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} items={item.items} />
        ))}
      </section>
    </div>
  );
};

export default App;
// Header
// Destaque
// Listas
// Rodapé
