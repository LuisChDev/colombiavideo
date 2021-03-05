import React, { useEffect, useState } from 'react';
import {StyledBody} from './styles';
import MovieSlider from 'components/MovieSlider';

export default ({back}: {back: string}) => {
  const [init, setInit] = useState(false);
  const [movies, setMovies] = useState([
    {title: "godzill", description: "la película", idn: 0, duration: 10,
     rating: "Todos", url: back + "/assets/posters/Godzilla.jpg"}
  ]);

  useEffect(() => {
    if (!init) {
      fetch(back + '/movies/all')
        .then(res => res.json().then(jsn => setMovies(jsn)));
      setInit(!init);
    }
  }, [init])

  return (
    <StyledBody>
        {groupList(3, movies).map((movie, i) => {
          console.log(movie[0].url);
          return (
            <MovieSlider height={i*300 + 100} movies={[
              ["dummy url", "dummy description"],
              ["dummy url", "dummy description"],
              [back.concat("/assets/") + (movie[0].url).substring(8), movie[0].description],
              [back.concat("/assets/") + (movie[1].url).substring(8), movie[1].description],
              [back.concat("/assets/") + (movie[2].url).substring(8), movie[2].description]
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
