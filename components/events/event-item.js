import Link from "next/link";
import styles from "./event-item.module.css";

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
    <li>
      {/* Image */}
      <img className={styles.Image} src={"/" + image} alt={title} />

      {/* Main */}
      <div>
        {/* Title */}
        <h2 className={styles.Title}>{title}</h2>

        {/* Time */}
        <div>
          <time>{humanReadableDate}</time>
        </div>

        {/* Address */}
        <div>
          <address>{formatedAddress}</address>
        </div>
      </div>

      {/*Link*/}
      <div>
        <Link href={exploreLink}>Explore Event</Link>
      </div>
      <br />
    </li>
  );
};

export default EventItem;
