import React from 'react'

const ToursCard = ({img, title,details,date,country,days,amount}) => {
  return (
    <article className="tour-card">
    <div className="tour-img-container">
      <img src={img} className="tour-img" alt="" />
      <p className="tour-date">{date}</p>
    </div>
    <div className="tour-info">
      <div className="tour-title">
        <h4>{title}</h4>
      </div>
      <p>
       {details}
      </p>
      <div className="tour-footer">
        <p>
          <span><i className="fas fa-map"></i></span> {country}
        </p>
        <p>{days}</p>
        <p>{amount}</p>
      </div>
    </div>
  </article>
  )
}

export default ToursCard
