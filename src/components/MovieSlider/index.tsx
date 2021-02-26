import React, { useState } from 'react';
import { PosterCont, StyledArrow, StyledMovieSlider, StyledPoster, StyledSliderContent } from './styles';
import ArrowLeft from 'images/arrow_left.png';
import ArrowRight from 'images/arrow_right.png';

const Arrow = ({direction, image, onClick}: {
  direction: "left" | "right",
  image: string,
  onClick: () => void,
}) => (
  <StyledArrow onClick={onClick} direction={direction}>
      <img src={image}/>
  </StyledArrow>
)

const MovieSlider = ({movies, height}: {
  movies: [string, string][],
  height: number
}) => {
  const [transl, setTransl] = useState(0);
  const [transt, setTranst] = useState(0.45);
  const [index, setIndex] = useState(0);

  const getWidth = () => window.innerWidth;

  const nextSlide = () => {
    if (index === movies.length - 1) {
      setTransl(0);
      setIndex(0);
      return;
    }

    setIndex(index + 1);
    setTransl((index + 1)*getWidth());
  }

  const prevSlide = () => {
    if (index === 0) {
      setTransl((movies.length - 1)*getWidth());
      setIndex(movies.length - 1);
      return;
    }

    setIndex(index - 1);
    setTransl((index - 1)*getWidth());
  }

  return (
    <StyledMovieSlider height={height}>
        <Arrow direction="left" image={ArrowLeft} onClick={prevSlide} />

        <StyledSliderContent
          transl={transl}
          transt={transt}
        >
            {movies.map(movie => <PosterCont width={getWidth()}>
                <StyledPoster src={movie[0]} alt={movie[1]} />
            </PosterCont>)}
        </StyledSliderContent>

        <Arrow direction="right" image={ArrowRight} onClick={nextSlide} />
    </StyledMovieSlider>
  )
}

export default MovieSlider;
