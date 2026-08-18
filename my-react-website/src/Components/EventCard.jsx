const EventCard = ({ title, date, location, description, image }) => {
  return (
    <article className="event-card">
      <img className="event-card-image" src={image} alt={title} />
      <div className="event-card-content">
        <p className="event-card-date">{date}</p>
        <h2>{title}</h2>
        <p className="event-card-location">{location}</p>
        <p className="event-card-description">{description}</p>
      </div>
    </article>
  )
}

export default EventCard
