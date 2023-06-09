// import { Link } from 'react-router-dom';

const ShowCard = ({ name, image, id, summary, onStarMeClick }) => {
  const summaryStripped = summary
    ? summary.split('').slice(0, 10).join('').replace(/<.+?>/g, '')
    : 'No summary available';

  return (
    <div>
      <div>
        <img src={image} alt={name} />
      </div>
      <h1> {name}</h1>
      <p>{summaryStripped}</p>

      <div>
        {/* <Link to={`/show/${id}`}> Read more</Link> */}

        <a href={`/show/${id}`} target="_blank" rel="noreferrer">{' '}Read more</a>
        <button type="button" onClick={() => onStarMeClick(id)}>
                  Star me
              </button>
      </div>
    </div>
  );
};

export default ShowCard;
