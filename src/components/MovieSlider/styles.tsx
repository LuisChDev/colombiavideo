import styled from 'styled-components';

const StyledMovieSlider = styled.div<{
  height: number,
}>`
    width: 100%;
    position: absolute;
    top: ${props => props.height}px;
    display: flex;
    justify-content: space-around;
    background-color: rgba(255,255,255,0.4);
    box-shadow: 0 0 10px ${props => props.theme.colors.primary};
    overflow: hidden;
`

const StyledSliderContent = styled.div<{
  transl: number,
  transt: number,
}>`
  transform: translateX(-${props => props.transl}px);
  transition: transform ease-out ${props => props.transt}s;
  height: 100%;
  display flex;
`

const PosterCont = styled.div<{
  width: number
}>`
    width: ${props => props.width}px;
    display: flex;
    justify-content: center;
`

const StyledPoster = styled.img`
    height: 250px;
    margin: 0 auto;
    transition: transform ease-in 0.1s;
    &:hover {
      transform: scale(1.1);
    }

`

const StyledArrow = styled.div<{
  direction: "left" | "right",
}>`
  display: flex;
  position: absolute;
  z-index: 100;
  ${props => props.direction === 'right' ? 'right: 25px' : 'left: 25px'};
  height: 100%;
  width: 50px;
  justify-content: center;
  cursor: pointer;
  align-items: center;
  transition: transform ease-in 0.1s;
  &:hover {
    transform: scale(1.1);
  }
  img {
    transform: translateX(${props => props.direction === 'left' ? '-2' : '2'}px);
    max-height: 40px;
    width: auto;
    &:focus {
      outline: 0;
    }
  }
`

export { StyledMovieSlider, StyledSliderContent, StyledPoster, StyledArrow, PosterCont };
