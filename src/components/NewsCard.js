import "../style/CardNews.css";

export default function NewsCard({ items }) {
  const { description, publishedAt, title, urlToImage, url } = items;

  const data = new Date(publishedAt);
  const month = data.getMonth();
  const date = data.getDate();
  return (
    <figure className="snip1216">
      <div className="image">
        <img src={urlToImage} alt="sample69" />
      </div>
      <figcaption className="card-datas">
        <div className="date">
          <span className="day">
            {date.toString().split("").length === 1 ? `0${date}` : date}
          </span>
          <span className="month">
            {month.toString().split("").length === 1 ? `0${month}` : month}
          </span>
        </div>

        <h3>{title}</h3>
        <p>{`${description.slice(0, 90)}...`}</p>
        <a
          href={url}
          target="_black"
          style={{ height: "20px", color: "white", backgroundColor: "green" }}
        >
          Learn More
        </a>
      </figcaption>
      <div></div>
    </figure>
  );
}
