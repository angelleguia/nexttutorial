import classes from "./event-item.module.css";

const EventItem = (props) => {
  const { title, image, date, location } = props;

  const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const formatedAddress = location.replace(", ", "\n");

  // const exploreLink = `/events/${id}`;

  return (
    <li className={classes.item}>
      {/* Image */}
      <img src={"/" + image} alt={title} />

      {/* Main */}
      <div className={classes.content}>
        {/* Title */}
        <h2>{title}</h2>

        {/* Time */}
        <div className={classes.date}>
          <time>{humanReadableDate}</time>
        </div>

        {/* Address */}
        <div className={classes.address}>
          <address>{formatedAddress}</address>
        </div>
        {/*Link*/}
        <div>
          <a href="/about">Explore Event</a>
        </div>
      </div>

      <br />
    </li>
  );
};

export default EventItem;
