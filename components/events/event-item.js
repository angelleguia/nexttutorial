import Link from "next/link";
import classes from "./event-item.module.css";

const EventItem = (props) => {
  const { title, image, date, location, id } = props;

  const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const formatedAddress = location.replace(", ", "\n");

  const exploreLink = `/events/${id}`;

  return (
    <li className={classes.item}>
      {/* Image */}
      <img src={"/" + image} alt={title} />

      {/* Main */}
      <div className={classes.content}>
        <div className={classes.summary}>
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
        </div>
        {/*Link*/}
        <div className={classes.actions}>
          <Link href={exploreLink}>Explore Event</Link>
        </div>
      </div>
      <br />
    </li>
  );
};

export default EventItem;
