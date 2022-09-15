import React from "react";

function Content(props) {
    console.log(props)
    return (
        <div className="container">
            <a href={props.imageUrl}><img src={props.imageUrl} className="container--img"/></a>    
            <div className="content">
                <p className="content--text"><span><img src="/images/marker.png"/></span> {props.location} <span className="content--span"> <a href={props.googleMapsUrl}>View on Google Maps</a></span></p>
                <h2 className="title">{props.title}</h2>
                <p className="date"><span className="ste-date">{props.startDate}</span> - <span className="ste-date">{props.endDate}</span></p>
                <p className="description"> {props.description} </p>
            </div>
        </div>
    )
}

export default Content