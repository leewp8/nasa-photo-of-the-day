import React from 'react'
import styled, {keyframes} from 'styled-components';

const kf = keyframes`
  100% {
    opacity: 1;
    transform: scale(1) rotateZ(0);
  }
`

const StyledNasaPhoto = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 8px;
    border-bottom: 2px solid white;
    opacity: 0;
    transform: scale(2) rotateZ(180deg);
    animation: ${kf} 0.5s ease-in-out forwards;

    background-color: ${pr => pr.theme.primaryColor};
    color: ${pr => pr.theme.secondaryColor};

    @media ${pr => pr.theme.breakpointMobile} {
        width: initial;
  }


`


const NasaPhoto = (props) => {
    return (
        <StyledNasaPhoto className='apod-wrapper'>
            <h1>NASA Astronomy Photo of the Day</h1>
            <h2>{props.photo.title}</h2>
            <h3>{props.photo.date}</h3>
            <div className='photo-wrapper'>
                {`${props.photo.media_type}` === 'video' ? (
                   <iframe width='853' height='480' src={props.photo.url} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title="Embedded youtube" />
                ) : (
                    <img src={props.photo.hdurl} alt='APOD' />
                )}
            </div>
            
            <p>{props.photo.explanation}</p>
            <p>Copyright: {props.photo.copyright}</p>
        </StyledNasaPhoto>
    )
}

export default NasaPhoto