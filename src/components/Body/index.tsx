import React, { useEffect, useState } from 'react';
import {StyledBody} from './styles';
import MovieSlider from 'components/MovieSlider';

export default () => {
  const [init, setInit] = useState(false);
  const [movies, setMovies] = useState([
    {title: "godzill", description: "la película", idn: 0, duration: 10,
     rating: "Todos", url: "http://localhost:8081/assets/posters/Godzilla.jog"}
  ]);

  useEffect(() => {
    if (!init) {
      fetch('http://localhost:8081/movies/all')
        .then(res => res.json().then(jsn => setMovies(jsn)));
      setInit(!init);
    }
  }, [init])

  return (
    <StyledBody>
        {groupList(3, movies).map((movie, i) => {
          return (
            <MovieSlider height={i*300 + 100} movies={[
              ["http://localhost:8081/assets/" + movie[0].url, movie[0].description],
              ["http://localhost:8081/assets/" + movie[1].url, movie[1].description],
              ["http://localhost:8081/assets/" + movie[2].url, movie[2].description]
            ]} />
          );
        })}
    </StyledBody>
    );
}

function groupList(group: number, lista: any[]): any[][] {
  let counter = 0;
  let finalList: any[][] = [];
  let partialList: any[] = [];
  for (let i = 0; i < lista.length; i++) {
    let newVal: any = lista[counter];
    partialList.push(newVal);
    if ((counter + 1) % group === 0 && counter !== 0) {
      finalList.push(partialList);
      partialList = [];
    }
    counter++;
  }
  return finalList;
}
