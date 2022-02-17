import React from 'react'

// const dummyData = {
//     copyright: "Hawk Wolinski",
//     date: "2022-02-16",
//     explanation: "What's that on the Sun? Although it may look like a flowing version of the Eiffel Tower, it is a solar prominence that is actually much bigger -- about the height of Jupiter. The huge prominence emerged about ten days ago, hovered over the Sun's surface for about two days, and then erupted -- throwing a coronal mass ejection (CME) into the Solar System. The featured video, captured from the astrophotographer's backyard in Hendersonville, Tennessee, USA, shows an hour time-lapse played both forwards and backwards. That CME did not impact the Earth, but our Sun had unleashed  other recent CMEs that not only triggered Earthly auroras, but puffed out the Earth's atmosphere enough to cause just-launched Starlink satellites to fall back. Activity on the Sun, including sunspots, prominences, CMEs and flares, continues to increase as the Sun evolves away from a deep minimum in its 11-year magnetic cycle.   Birthday Surprise: What picture did APOD feature on your birthday? (post 1995)",
//     media_type: "video",
//     title: "Eiffel Tower Prominence on the Sun",
//     url: "https://www.youtube.com/embed/liapnqj9GDc?rel=0"
// }

const NasaPhoto = (props) => {
    return (
        <div className='apod-wrapper'>
            <h1>NASA APOD</h1>
            <h2>{props.photo.title}</h2>
            <h3>{props.photo.date}</h3>
            <div className='photo-wrapper'>
                {`${props.photo.media_type}` === 'video' ? (
                   <iframe width='853' height='480' src={props.photo.url} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title="Embedded youtube" />
                ) : (
                    <img src={props.photo.hdurl} alt='APOD Image' />
                )}
            </div>
            
            <p>{props.photo.explanation}</p>
            <p>Copyright: {props.photo.copyright}</p>
        </div>
    )
}

export default NasaPhoto